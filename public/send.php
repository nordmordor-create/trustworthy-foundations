<?php
header('Content-Type: application/json; charset=utf-8');

// Настройки почты - ЗАМЕНИТЕ НА ВАШИ ДАННЫЕ
$to = 'info@sk-terekhichev.ru'; // Email получателя
$subject = 'Новая заявка с сайта СК Максима Терехичева';

// Защита от спама
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '';

// Проверка метода запроса
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Метод не поддерживается'
    ]);
    exit;
}

// Получение и очистка данных
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Валидация данных
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Имя должно содержать минимум 2 символа';
}

if (empty($phone) || strlen($phone) < 10) {
    $errors[] = 'Введите корректный номер телефона';
}

// Простая защита от спама - проверка на подозрительные паттерны
if (preg_match('/<[^>]*>/', $name . $phone . $message)) {
    $errors[] = 'Недопустимые символы в данных';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(', ', $errors)
    ]);
    exit;
}

// Формирование письма
$email_message = "
==============================================
НОВАЯ ЗАЯВКА С САЙТА
==============================================

Имя: {$name}
Телефон: {$phone}

Сообщение:
{$message}

==============================================
Дата: " . date('d.m.Y H:i:s') . "
IP адрес: " . $_SERVER['REMOTE_ADDR'] . "
==============================================
";

// Заголовки письма
$headers = "From: noreply@{$host}\r\n";
$headers .= "Reply-To: noreply@{$host}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Отправка письма
$mail_sent = mail($to, $subject, $email_message, $headers);

if ($mail_sent) {
    // Успешная отправка
    echo json_encode([
        'success' => true,
        'message' => 'Заявка успешно отправлена'
    ]);
} else {
    // Ошибка отправки
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка при отправке. Попробуйте позже или позвоните нам.'
    ]);
}
?>
