<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$data = json_decode(file_get_contents("php://input"));
require_once ('vo/libraryVO.php');

define( "DATABASE_SERVER", "flatroofjobs.db.10253438.hostedresource.com");
define( "DATABASE_USERNAME", "flatroofjobs");
define( "DATABASE_PASSWORD", "Sadie9954!");
define( "DATABASE_NAME", "flatroofjobs");

$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$jobID = mysqli_real_escape_string($con,$data->jobID);

$query = sprintf("SELECT * FROM proposal WHERE jobID = '".$jobID."'");
$result = mysqli_query($con,$query);
$resultValueObjects = array();
while ($row = mysqli_fetch_object($result)) {
	$oneVO = new libraryVO();
	$oneVO->introduction = $row->introduction;
	$oneVO->materials = $row->materials;
	$oneVO->deck = $row->deck;
	$oneVO->exclusions = $row->exclusions;
	$oneVO->warranty = $row->warranty;
	$oneVO->postinstall = $row->postinstall;
	$oneVO->insulation = $row->insulation;
	$oneVO->membrane = $row->membrane;
	array_push( $resultValueObjects, $oneVO );
}
echo json_encode($resultValueObjects);
?>