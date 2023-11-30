<?php
$servername = "your_mysql_host";
$username = "your_mysql_username";
$password = "your_mysql_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM sportist";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<li>{$row['sportist_name']} - {$row['phone_number']}</li>";
    }
} else {
    echo "<li>No sportists available</li>";
}

$conn->close();
?>
