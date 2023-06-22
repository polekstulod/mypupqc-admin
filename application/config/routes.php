<?php
defined('BASEPATH') or exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/userguide3/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'auth/signin';
$route['404_override'] = 'auth/error_message';
$route['translate_uri_dashes'] = FALSE;

/*
| -------------------------------------------------------------------------
| AUTHENTICATION ROUTES
| -------------------------------------------------------------------------
*/

$route['signin'] = 'auth/signin';
$route['forgot-password'] = 'auth/forgot_password';
$route['reset-password/(:any)'] = 'auth/reset_password/$1';
$route['sis'] = 'auth/sis';
$route['vass'] = 'auth/vass';
$route['osssac'] = 'auth/osssac';

/*
| -------------------------------------------------------------------------
| SUPER ADMIN ROUTES
| -------------------------------------------------------------------------
*/

$route['admin/dashboard'] = 'admin';
$route['admin/profile'] = 'admin/profile';
$route['admin/profile/settings'] = 'admin/settings';

/*
| ----------------------
|     USER MANAGEMENT
| ----------------------
*/

$route['admin/user-management/students'] = 'admin/user_students';
$route['admin/user-management/pup-staffs'] = 'admin/user_pup_staffs';

/*
| ----------------------
|     ROLE MANAGEMENT
| ----------------------
*/

$route['admin/role-management/roles'] = 'admin/roles';

/*
| ----------------------
|     USER ROLE MANAGEMENT
| ----------------------
*/

$route['admin/user-role-management/student'] = 'admin/user_roles_student';
$route['admin/user-role-management/staff'] = 'admin/user_roles_staff';


/*
| --------------
|     ODRS
| --------------
*/

$route['admin/odrs/documents'] = 'admin/documents';
$route['admin/odrs/requests'] = 'admin/requests';
$route['admin/odrs/history'] = 'admin/history';

/*
| --------------
|     OMSSS
| --------------
*/

$route['admin/omsss/all-appointment'] = 'admin/all_appointment';
$route['admin/omsss/appointment-history'] = 'admin/appointment_history';


/*
| --------------
|     EVRSERS
| --------------
*/
// Organizer Management
$route['admin/evrsers/organizer-management'] = 'admin/organizer_management';

// Facilities
$route['admin/evrsers/facilities'] = 'admin/facilities';

// Reservations
$route['admin/evrsers/manage-reservations'] = 'admin/manage_reservations';
$route['admin/evrsers/reservation-history'] = 'admin/reservation_history';

/*
| ----------------------
|         OTHERS
| ----------------------
*/

$route['admin/holiday'] = 'admin/holiday';
$route['admin/organization'] = 'admin/organization';
