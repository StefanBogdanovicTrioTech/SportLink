<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "sportlink";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$username = $_POST['userName'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the password for security
$role = $_POST['role'];

// Prepare and execute SQL query
$stmt = $conn->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $password, $role);
$stmt->execute();

// Close connections
$stmt->close();
$conn->close();

echo "User registered successfully!";
?>