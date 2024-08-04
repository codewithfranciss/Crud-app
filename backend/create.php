<?php
include 'db.php';


header("Access-Control-Allow-Origin: *"); // Allow requests from any origin// Allow specific methods
header("Access-Control-Allow-Headers: *");
// Read and decode JSON input
$data = json_decode(file_get_contents("php://input"));

// Check if JSON decoding was successful
if ($data === null) {
    echo json_encode(["message" => "Invalid input data"]);
    exit();
}

// Ensure required fields are present
if (!isset($data->username) || !isset($data->email) || !isset($data->message)) {
    echo json_encode(["message" => "Missing required fields"]);
    exit();
}

$username = $data->username;
$email = $data->email;
$message = $data->message;

// Prepare and execute SQL query
$sql = "INSERT INTO users (username, email, message) VALUES ('$username', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "User created successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>
