<?php
$em=$_POST['email'];
echo$em; 
echo"<br>";
$pd=$_POST['password'];
echo$pd; 
echo"<br>";
$cpd=$_POST['confirm-password'];

//connect to database
$con=mysqli_connect("localhost","root","","weatherapp");
if($con)
{
	echo "Connection to server successful";
}
else
{
	die("could not connect to server");

}
/$sql="INSERT INTO users(firstname,surname,email,password,dayofbirth,monthofbirth,yearofbirth,gender) VALUES('$fn','$sn','$em','$pd','$day','$mt','$yr','$gd')";
$qry=mysqli_query($con,$sql);
if($qry)
{
	echo "record saved successfully";
	header("location:linkuplandingpage.html");
}
else
{
	echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

    
/*$sql="DELETE FROM users WHERE gender='male'"; 
$qry=mysqli_query($con,$sql);
if($qry)
{
	echo "deleted";
}
else
{
echo "Error: " . $sql . "<br>" . mysqli_error($con);
}*/





?>