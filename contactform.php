<?php
	if (isset($_POST['submit'])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

		$my_email = "no.radal1203@gmail.com";
		$headers = "Envoyé par: " . $email . "\r\n";
		$headers .= "Nom: " . $name . "\r\n";
		$headers .= "Depuis: Portofolio\r\n";
		
		if (mail($my_email, "Sujet de l'e-mail", $message, $headers)) {
			header("Location: index.php?mailsend");
		} else {
			echo "Une erreur s'est produite lors de l'envoi de l'e-mail.";
		}
	}
?>
