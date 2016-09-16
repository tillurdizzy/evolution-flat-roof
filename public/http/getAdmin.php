<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
require_once ('vo/adminVO.php');

define( "DATABASE_SERVER", "evoflatroof.db.10253438.hostedresource.com");
define( "DATABASE_USERNAME", "evoflatroof");
define( "DATABASE_PASSWORD", "Sadie9954!");
define( "DATABASE_NAME", "evoflatroof");

$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$query = sprintf("SELECT * FROM admin");
$result = mysqli_query($con,$query);
$resultValueObjects = array();
while ($row = mysqli_fetch_object($result)) {
	$oneVO = new adminVO();
	$oneVO->PRIMARY_ID = $row->PRIMARY_ID;
	$oneVO->laborPerSquare = $row->laborPerSquare;
	$oneVO->laborTearOut = $row->laborTearOut;
	$oneVO->delivery = $row->delivery;
	array_push( $resultValueObjects, $oneVO );
}
echo json_encode($resultValueObjects);
?>