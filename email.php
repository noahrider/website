<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // your email address
    $to = 'dev@noahrider.com';

    // email subject
    $subject = '[/njr] New email from ' . $name;

    // email headers
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // send email
    mail($to, $subject, $message, $headers);
}
?>