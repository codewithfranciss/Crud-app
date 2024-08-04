<?php
include 'db.php';

header("Access-Control-Allow-Origin: *"); // Allow requests from any origin// Allow specific methods
header("Access-Control-Allow-Headers: *");

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$sql = "DELETE FROM users WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "User deleted successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>
