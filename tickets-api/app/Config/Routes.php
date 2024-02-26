<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->group('api', function ($routes) {
   $routes->resource('issues'); //api/issues
});

$routes->group('api', function ($routes) {
   $routes->resource('issues'); //api/issues
});