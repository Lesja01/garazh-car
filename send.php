<?php
$email = "lesja0101@gmail.com";
$name = $_SERVER['HTTP_HOST'];

	$to = $email;
	$subject = 'Заявка на звонок';
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
			<table cellpadding="0" cellspacing="0" width="640" align="left" border="1">
				<tr><th><h2>Имя клиента</h2></th><th><h4> '.$_POST["name"].'</h4></th></tr>
				<tr><th><h2>Номер клиента </h2></th><th><h4>'.$_POST["phone"].'</h4></th></tr>
				<tr><th><h2>Адрес сайта </h2></th><th><h4>'.$_POST["seo_url"].'</h4></th></tr>
				<tr><th><h2>Email клиента </h2></th><th><h4>'.$_POST["seo_email-adress"].'</h4></th></tr>				
			</table>				
			</body>
			</html>';
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: ".$name." <admin@".$name.">\r\n";
mail($to, $subject, $message, $headers);
?>