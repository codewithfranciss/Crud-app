<?php
include 'db.php';


header("Access-Control-Allow-Origin: *"); // Allow requests from any origin// Allow specific methods
header("Access-Control-Allow-Headers: *");

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$users = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

echo json_encode($users);

$conn->close();
?>
