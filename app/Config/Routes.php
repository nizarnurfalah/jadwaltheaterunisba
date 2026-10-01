<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->get('/', 'Home::index');

// Test route dengan closure
$routes->get('test', function() {
    return 'Test route works!';
});

// Capillary route
$routes->match(['get', 'post'], 'capillary', 'Capillary::index');
