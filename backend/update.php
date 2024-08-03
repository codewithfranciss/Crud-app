<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$username = $data->username;
$email = $data->email;
$message = $data->message;

$sql = "UPDATE users SET username='$username', email='$email', message='$message' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "User updated successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>
