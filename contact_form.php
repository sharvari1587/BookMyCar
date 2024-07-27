<?php
// Database configuration
$servername = "localhost"; // Change this to your database server name
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$dbname = "wt_car"; // Change this to your database name

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    
}
else{
    echo "Success";
}

// Retrieve form data
$firstName = $_POST['first_name'];
$lastName = $_POST['last_name'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Sanitize data to prevent SQL injection
$firstName = mysqli_real_escape_string($conn, $firstName);
$lastName = mysqli_real_escape_string($conn, $lastName);
$telephone = mysqli_real_escape_string($conn, $telephone);
$email = mysqli_real_escape_string($conn, $email);
$message = mysqli_real_escape_string($conn, $message);

// Insert data into database
$sql = "INSERT INTO contact_form (first_name, last_name, telephone, email, message)
        VALUES ('$firstName', '$lastName', '$telephone', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close database connection
$conn->close();
?>
