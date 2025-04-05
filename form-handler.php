<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "u.o.v@yandex.ru";  // ← сюда придёт письмо
    $subject = "Заявка с сайта СТРОЙ-МСК";
    $body = "Имя: $name\nТелефон: $phone\nКомментарий:\n$message";

    $headers = "From: no-reply@stroy-msk.ru" . "\r\n" .
               "Reply-To: $to" . "\r\n" .
               "Content-type: text/plain; charset=utf-8";

    if (mail($to, $subject, $body, $headers)) {
        echo "Заявка успешно отправлена!";
    } else {
        echo "Ошибка при отправке!";
    }
}
?>