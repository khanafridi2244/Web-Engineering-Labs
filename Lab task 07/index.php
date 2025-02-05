
<?php

   if(isset($_POST['submittbutton'])){
     $value_one = $_POST['valueonetextbox'];
     $value_two = $_POST['valuetwotextbox'];
     echo $value_one + $value_two;
   }
?>

<form method="post">
   <label for="value_one">value one</label>
   <input type="text" name="valueonetextox"><br><br>
   <label for="value_two">value two</label>
   <input type="text" name="valuetwotextox"><br><br>
   <input type="submit" value="add textbox" name= "submittbutton">
</form> 
