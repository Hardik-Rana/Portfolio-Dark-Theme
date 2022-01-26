<?php
    header('Content-type: application/json');
    

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];
    $date = date( "D M d, Y G:i" );

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mysite";
    
    $conn = mysqli_connect( $servername, $username, $password, $dbname );

    if ( !$conn ) {
        // die( "Connection failed: " . mysqli_connect_error() );
        $response_array['status'] = 'error';
        echo json_encode($response_array);
    }

    $sql = "INSERT INTO responce (name, mail, number, message, date)
VALUES ('$name', '$email', '$phone', '$message','$date')";

    if ( $conn->query( $sql ) === TRUE ) {
        
        $response_array['status'] = 'succsess';
        echo json_encode($response_array);

    } else {
       
        $response_array['status'] = 'error';
        echo json_encode($response_array);

        // die( header('HTTP/1.0 404 Not Found'););
    }

    mysqli_close( $conn );
    
?>
