<?php

$name = $_REQUEST['name'];
$which = $_REQUEST['which'];
$guest = $_REQUEST['guest'];

$string = $name . " | " . $which . " | " . $guest . "\n";

$file = fopen("submit.txt", "a");
fwrite($file, "$string");
fclose($file);
?>
