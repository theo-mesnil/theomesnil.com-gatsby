<?php
header('Access-Control-Allow-Origin: http://localhost:8000');
$data = file_get_contents('posts.json');
print_r($data);
?>
