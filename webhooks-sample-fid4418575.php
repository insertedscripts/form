<?php
// This is a sample for 123ContactForm WebHooks usage
// In this example, we will capture all data received using HTTP POST and send it by email
// Using WebHooks, you can extend the use of 123ContactForm web forms,
// ie: store the data in your own database, directly display it on your website etc.
// for more details, visit http://www.123contactform.com/webhooks.html 

$formdata = ARRAY();
foreach ($_POST as $key => $value) {
$value = stripslashes($value);
$formdata[$key]=$value;
}
if (array_key_exists('uid', $formdata)==false) die('One essential parameter was not POST-ed. Exiting.');

// We will now collect all received data, and send by email
$emailtxt="Received data:\r\n";


//Lets use field Short text
$emailtxt.="$formdata[controlname47504547] is "; $emailtxt.="$formdata[controlvalue47504547]\r\n"; 

//Lets use field Name - component # 1
$emailtxt.=$formdata['controlname47504548-1']." is "; $emailtxt.=$formdata['controlvalue47504548-1']."\r\n"; 

//Lets use field Name - component # 2
$emailtxt.=$formdata['controlname47504548-2']." is "; $emailtxt.=$formdata['controlvalue47504548-2']."\r\n"; 

//Lets use field Email
$emailtxt.="$formdata[controlname47504550] is "; $emailtxt.="$formdata[controlvalue47504550]\r\n"; 

// We will now add other data sent by 123ContactForm: UserID, FormID, MessageID, IP
$emailtxt.="UID is "; $emailtxt.="$formdata[uid]\r\n";
$emailtxt.="FID is "; $emailtxt.="$formdata[fid]\r\n";
$emailtxt.="MID is "; $emailtxt.="$formdata[mid]\r\n";
$emailtxt.="IP is "; $emailtxt.="$formdata[ip]\r\n";
$emailtxt.="Referer is "; $emailtxt.="$formdata[referer]\r\n";


// Now lets send an email
$from="From: automated.applications.tests@123formbuilder.com<automated.applications.tests@123formbuilder.com>\r\nReturn-path: automated.applications.tests@123formbuilder.com";
mail("petru@123formbuilder.io", 'WebHooks Example', $emailtxt, $from);

// Now that you understood how WebHooks work, you can go for advanced tasks:
// store in your database, post to your blog or guestbook, send data by fax, conquer Mars...
?>
