<?php

if($_POST["submit"]) {
    $recipient="coryintenn@gmail.com";
    $subject="corystephenson.github.io form submission";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}
   
?><!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #242148;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>  
</head>    
<body>
    
    <?=$thankYou ?>
    
<div class="modal fade" id="contact" role="dialogue">
    <div class="modal-dialog">
      <div class="modal-content">
        <form class="form-horizontal" method="POST" action="pages/email.php">
          <div class="modal-header">
            <h1>Send me an email</h1>
          </div>

          <div class="modal-body">




            <fieldset class="form-group">
              <label for="name" class="col-lg-2 control-label">Name: </label>
              <div class="col-lg-10">
              <input type="text" class="form-control" id="sender" name="sender" placeholder="Please put your full name" />
            </fieldset>

            <fieldset class="form-group">
              <label for="email" class="col-lg-2 control-label">Email: </label>
              <div class="col-lg-10">
              <input type="email" class="form-control" id="senderEmail" name="senderEmail" value="" required placeholder="email@siteexample.com"/>
            </fieldset>

            <fieldset class="form-group">
              <label for="message" class="col-lg-2 control-label">Message: </label>
              <div class="col-lg-10">
              <textarea type= "text" id="message" name="message" rows="10" cols="30" class="form-control"></textarea>
            </fieldset>

            <div class="modal-footer">
              <a href="https://corystephenson.github.io/index.html" class="btn btn-default" data-dismiss="modal">Close it</a>
              <button class="btn btn-primary" type="submit"> Submit</button>
            </div>


          </div>
        </form>
        
      </div>
    </div>
  </div>

</div>
</body>
</html>
</html>
