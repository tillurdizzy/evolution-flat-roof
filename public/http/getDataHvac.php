<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$data = json_decode(file_get_contents("php://input"));
require_once ('vo/dataVO.php');

define( "DATABASE_SERVER", "flatroofjobs.db.10253438.hostedresource.com");
define( "DATABASE_USERNAME", "flatroofjobs");
define( "DATABASE_PASSWORD", "Sadie9954!");
define( "DATABASE_NAME", "flatroofjobs");
$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$jobID = mysqli_real_escape_string($con,$data->jobID);

$query = sprintf("SELECT * FROM hvac WHERE jobID = '".$jobID."'");
$result = mysqli_query($con,$query);
$resultValueObjects = array();
while ($row = mysqli_fetch_object($result)) {
	$oneVO = new dataVO();
	$oneVO->PRIMARY_ID = $row->PRIMARY_ID;
	$oneVO->jobID = $row->jobID;
	$oneVO->data = $row->data;
	array_push( $resultValueObjects, $oneVO );
}
echo json_encode($resultValueObjects);
?>