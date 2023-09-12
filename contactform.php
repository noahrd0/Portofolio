<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$my_email = "no.radal1203@gmail.com"; // fonctionne pas avec gmail
	$headers = "Envoye par: ".$email.", Nom: ".$name.", depuis: Portofolio\n\n".$message;

	mail($my_email, $name, $txt, $headers);
	header("Location: index.php?mailsend");
}