<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$data = json_decode(file_get_contents("php://input"));
require_once ('vo/libraryVO.php');

define( "DATABASE_SERVER", "evoflatroof.db.10253438.hostedresource.com");
define( "DATABASE_USERNAME", "evoflatroof");
define( "DATABASE_PASSWORD", "Sadie9954!");
define( "DATABASE_NAME", "evoflatroof");

//connect to the database.
$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$query = sprintf("SELECT * FROM library");
$result = mysqli_query($con,$query);
$resultValueObjects = array();
while ($row = mysqli_fetch_object($result)) {
	$oneVO = new libraryVO();
	$oneVO->introduction = $row->introduction;
	$oneVO->overview = $row->overview;
	$oneVO->scope = $row->scope;
	$oneVO->exclusions = $row->exclusions;
	$oneVO->warranty = $row->warranty;
	$oneVO->preinstall = $row->preinstall;
	$oneVO->postinstall = $row->postinstall;
	$oneVO->insulation = $row->insulation;
	$oneVO->membrane = $row->membrane;
	$oneVO->options = $row->options;
	
	array_push( $resultValueObjects, $oneVO );
}
echo json_encode($resultValueObjects);
?>