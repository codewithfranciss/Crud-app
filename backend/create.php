<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$email = $data->email;
$message = $data->message;

$sql = "INSERT INTO users (username, email, message) VALUES ('$username', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "User created successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>
