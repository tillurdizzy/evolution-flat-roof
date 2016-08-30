<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$input = json_decode(file_get_contents("php://input"));

define( "DATABASE_SERVER", "evoflatroof.db.10253438.hostedresource.com");
define( "DATABASE_USERNAME", "evoflatroof");
define( "DATABASE_PASSWORD", "Sadie9954!");
define( "DATABASE_NAME", "evoflatroof");

$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');

$PRIMARY_ID = mysqli_real_escape_string($con,$input->PRIMARY_ID);
$item = mysqli_real_escape_string($con,$input->item);
$class = mysqli_real_escape_string($con,$input->class);
$sort = mysqli_real_escape_string($con,$input->sort);
$mil = mysqli_real_escape_string($con,$input->mil);
$fleece = mysqli_real_escape_string($con,$input->fleece);
$length = mysqli_real_escape_string($con,$input->length);
$width = mysqli_real_escape_string($con,$input->width);
$qty = mysqli_real_escape_string($con,$input->qty);
$pkg = mysqli_real_escape_string($con,$input->pkg);
$price = mysqli_real_escape_string($con,$input->price);
$num = mysqli_real_escape_string($con,$input->num);
$unit = mysqli_real_escape_string($con,$input->unit);
$component = mysqli_real_escape_string($con,$input->component);

$query = "UPDATE inv_membranes SET 
item='".$item."',
class='".$class."',
qty='".$qty."',
sort='".$sort."',
mil='".$mil."',
fleece='".$fleece."',
width='".$width."',
length='".$length."',
pkg='".$pkg."',
price='".$price."',
num='".$num."',
unit='".$unit."',
component='".$component."'
WHERE PRIMARY_ID='".$PRIMARY_ID."'";
$qry_res = mysqli_query($con,$query);
if ($qry_res) {
	$arr = array('msg' => "Success", 'result' => $qry_res);
	$jsn = json_encode($arr);
	echo($jsn);
} else {
	$arr = array('msg' => "Error", 'query' => $query,'result' => $qry_res);
	$jsn = json_encode($arr);
	echo($jsn);
}
?>