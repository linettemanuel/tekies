<?php
$firstname = $_POST['Name'];
$lastname = $_POST['Surname'];
$email = $_POST['Email'];
$tel = $_POST['Tel'];
$message = $_POST['Message'];

$to = "talent@tekies.eu";
$subject = "Web Page Info";
$message = "Firstname: $firstname \n\n Lastname: $lastname \n\n Tel: $tel \n\n Email: $email \n\n Message: $message"
$from = $email;
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "Mail Sent.";
?>
