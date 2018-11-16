<?php

/*
$formdata = ARRAY();
foreach ($_POST as $key => $value) {
$value = stripslashes($value);
$formdata[$key]=$value;
}
if (array_key_exists('uid', $formdata)==false) die('One essential parameter was not POST-ed. Exiting.');

$printtxt="Received data:\r\n";

$printtxt.="$formdata[controlname47504547] is "; $printtxt.="$formdata[controlvalue47504547]\r\n";
*/

$deprintat = DOMDocument::getElementByTagName("input")[1];

echo $deprintat;

?>
