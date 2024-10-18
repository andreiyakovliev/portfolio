<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	// Налаштовуємо SMTP для Gmail
	$mail->isSMTP();
	$mail->Host       = 'smtp.gmail.com';              // Сервер Gmail SMTP
	$mail->SMTPAuth   = true;
	$mail->Username   = 'andrii.iakovliev@gmail.com';        // Ваш Gmail
	$mail->Password   = 'jeor vpmf qolx ckyf';               // Ваш пароль від Gmail
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;   // Захищене з'єднання TLS
	$mail->Port       = 465;

	// Від кого лист
	$mail->setFrom('andrii.iakovliev@gmail.com', 'Портфоліо'); // Зміна імені відправника
	// Кому відправити
	$mail->addAddress('andrii.iakovliev@gmail.com');
	// Тема листа
	$mail->Subject = 'Повідомлення з сайту Портфоліо';

	// Тіло листа
	$body = '';

	// Додаємо дані з форми до тіла листа
	if(trim(!empty($_POST['form']['email']))){
		$body .= '<p><strong>Email:</strong> ' . $_POST['form']['email'] . '</p>';
	}
	if(trim(!empty($_POST['form']['name']))){
		$body .= '<p><strong>Ім\'я:</strong> ' . $_POST['form']['name'] . '</p>';
	}
	if(trim(!empty($_POST['form']['phone']))){
		$body .= '<p><strong>Телефон:</strong> ' . $_POST['form']['phone'] . '</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body .= '<p><strong>Повідомлення:</strong><br>' . nl2br($_POST['message']) . '</p>';
	}

	$mail->Body = $body;

	// Відправка
	try {
		$mail->send();
		$message = 'Дані надіслані!';
	} catch (Exception $e) {
		$message = 'Помилка: ' . $mail->ErrorInfo;
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>
