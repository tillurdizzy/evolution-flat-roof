<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$input = json_decode(file_get_contents("php://input"));

define( "DATABASE_SERVER", "flatroofjobs.db.10253438.hostedresource.com");
define( "DATABASE_USERNAME", "flatroofjobs");
define( "DATABASE_PASSWORD", "Sadie9954!");
define( "DATABASE_NAME", "flatroofjobs");

$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$introduction = mysqli_real_escape_string($con,$input->introduction);
$materials = mysqli_real_escape_string($con,$input->materials);
$deck = mysqli_real_escape_string($con,$input->deck);
$insulation = mysqli_real_escape_string($con,$input->insulation);
$membrane = mysqli_real_escape_string($con,$input->membrane);
$postinstall = mysqli_real_escape_string($con,$input->postinstall);
$exclusions = mysqli_real_escape_string($con,$input->exclusions);
$warranty = mysqli_real_escape_string($con,$input->warranty);
$jobID = mysqli_real_escape_string($con,$input->jobID);

$query = "INSERT INTO proposal (jobID,introduction,materials,deck,insulation,membrane,postinstall,exclusions,warranty) VALUES (
'".$jobID."','".$introduction."','".$materials."','".$deck."','".$insulation."','".$membrane."','".$postinstall."','".$exclusions."','".$warranty."')";

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