<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$input = json_decode(file_get_contents("php://input"));

define( "DATABASE_SERVER", "evoflatroof.db.10253438.hostedresource.com");
define( "DATABASE_USERNAME", "evoflatroof");
define( "DATABASE_PASSWORD", "Sadie9954!");
define( "DATABASE_NAME", "evoflatroof");

$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$item = mysqli_real_escape_string($con,$input->item);
$class = mysqli_real_escape_string($con,$input->class);
$qty = mysqli_real_escape_string($con,$input->qty);
$pkg = mysqli_real_escape_string($con,$input->pkg);
$price = mysqli_real_escape_string($con,$input->price);
$num = mysqli_real_escape_string($con,$input->num);
$unit = mysqli_real_escape_string($con,$input->unit);
$component = mysqli_real_escape_string($con,$input->component);

$query = sprintf("INSERT INTO inv_fasteners (item,class,qty,pkg,price,num,unit,component) VALUES (
'" . $item . "', " .
"'" . $class . "', " .
"'" . $qty . "', " .
"'" . $pkg . "', " .
"'" . $price . "', " .
"'" . $num . "', " .
"'" . $unit . "', " .
"'" . $component . "')");

$qry_res = mysqli_query($con,$query);

if ($qry_res) {
	$last_id = mysqli_insert_id($con);
	$arr = array('msg' => "Success", 'result' => $qry_res, 'id' => $last_id);
	$jsn = json_encode($arr);
	echo($jsn);
} else {
	$arr = array('msg' => "Error", 'query' => $query,'result' => $qry_res);
	$jsn = json_encode($arr);
	echo($jsn);
}
?>