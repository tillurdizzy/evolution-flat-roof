<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$data = json_decode(file_get_contents("php://input"));
require_once ('vo/inventoryVO.php');

define( "DATABASE_SERVER", "evoflatroof.db.10253438.hostedresource.com");
define( "DATABASE_USERNAME", "evoflatroof");
define( "DATABASE_PASSWORD", "Sadie9954!");
define( "DATABASE_NAME", "evoflatroof");

//connect to the database.
$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$query = sprintf("SELECT * FROM inv_fasteners");
$result = mysqli_query($con,$query);
$resultValueObjects = array();
while ($row = mysqli_fetch_object($result)) {
	$oneVO = new inventoryVO();
	$oneVO->PRIMARY_ID = $row->PRIMARY_ID;
	$oneVO->item = $row->item;
	$oneVO->class = $row->class;
	$oneVO->qty = $row->qty;
	$oneVO->pkg = $row->pkg;
	$oneVO->price = $row->price;
	$oneVO->num = $row->num;
	$oneVO->unit = $row->unit;
	$oneVO->component = $row->component;
	
	array_push( $resultValueObjects, $oneVO );
}
echo json_encode($resultValueObjects);
?>