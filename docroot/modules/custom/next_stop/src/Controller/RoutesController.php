<?php

namespace Drupal\next_stop\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * A controller for Next Stop Module.
 */
class RoutesController extends ControllerBase {

  const API_URL = "https://api-v3.mbta.com/"; // api base url
  /**
   * Makes API call for the page the user lands on.
   * 
   * @param $endpoint
   *    The endpoint to hit for information.
   * 
   * @return array
   *    The FULL array of data from the api.
   *    { data: [...], ?included: [...] }
   */
  public function fetchData($endpoint) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $endpoint);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $output = curl_exec($curl);
    curl_close($curl);
    return json_decode($output, true);
  }

  /**
   * Returns a render-able array for the all Routes page.
   */
  public function allRoutes() {
    $endpoint = self::API_URL . "/routes";
    $json = $this->fetchData($endpoint)['data'];
    
    // new array grouped by route type 
    foreach($json as $route) { 
      $route_type = $route['attributes']['type'];
      $routes_grouped_by_type[$route_type][] = $route;
    }

    $build = [
      'content' => [
        '#theme' => 'all_routes',
        '#routes' => $routes_grouped_by_type,
      ]
    ];
    return $build;
  }

  /**
   * Returns a render-able array for the all Routes page.
   */
  public function selectedRoute($routeId) {
    $schedule_info = $this->fetchData(self::API_URL.'/routes/'.$routeId)['data'];
    $schedule_name = $schedule_info['attributes']['long_name'];
    date_default_timezone_set('America/Kentucky/Louisville'); // quick and dirty for this purpose

    // Clean way to present filters in code.
    $payload = [
      "filter[route]" => $routeId,
      "page[limit]" => "20",
      "sort" => "departure_time",
      "include" => "stop",
      "filter[min_time]" => date('H:i'),
    ];

    $endpoint = self::API_URL . "/schedules?" . http_build_query($payload); // build url for fetchData()
    $json = $this->fetchData($endpoint);

    $stops = $json['data'];
    if (count($stops) == 0) { // if there are no more stops today, exit early. 
      return [
        'content' => [
          '#theme' => 'selected_route',
          '#stops' => [],
        ]
      ];
    }
    
    // TODO: Clean this up a little. Need to figure out a better way to get information. 
    // Ask the client what information do we want to present and how? User input? 
    if (array_key_exists('included', $json)) { // protecting against not having any more stops.
      $locations = $json['included'];
      // bring in the stop location information with the schedule. 
      foreach ($stops as $key => $stop) {
        $stop_id = $stop['relationships']['stop']['data']['id'];
        $location_index = array_search($stop_id, array_column($locations, 'id'));
        $stops[$key]['location'] = $locations[$location_index];
      }
    }

    // group by direction for the demo. Need to decide how to present the information to the user.
    foreach($stops as $stop) { 
      $direction_id = $stop['attributes']['direction_id'];
      $stops_grouped_by_direction[$direction_id][] = $stop;
    }
    
    return [
      'content' => [
        '#theme' => 'selected_route',
        '#stops' => $stops_grouped_by_direction,
        '#schedule' => $schedule_name,
      ]
    ];
  }

}