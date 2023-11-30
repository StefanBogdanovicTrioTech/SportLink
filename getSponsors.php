<?php
$servername = "your_mysql_host";
$username = "your_mysql_username";
$password = "your_mysql_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM sponsors";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<li>{$row['sponsor_name']} - {$row['phone_number']}</li>";
    }
} else {
    echo "<li>No sponsors available</li>";
}

$conn->close();
?>
