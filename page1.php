<?php
function ValidateEmail($email)
{
   $pattern = '/^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i';
   return preg_match($pattern, $email);
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formid']) && $_POST['formid'] == 'form1')
{
   $mailto = 'kaustavroy338@gmail.com';
   $mailfrom = isset($_POST['email']) ? $_POST['email'] : $mailto;
   $subject = 'Website form';
   $message = 'Values submitted from web site form:';
   $success_url = './success_page.html';
   $error_url = './fail.html';
   $error = '';
   $eol = "\n";
   $boundary = md5(uniqid(time()));

   $header  = 'From: '.$mailfrom.$eol;
   $header .= 'Reply-To: '.$mailfrom.$eol;
   $header .= 'MIME-Version: 1.0'.$eol;
   $header .= 'Content-Type: multipart/mixed; boundary="'.$boundary.'"'.$eol;
   $header .= 'X-Mailer: PHP v'.phpversion().$eol;
   if (!ValidateEmail($mailfrom))
   {
      $error .= "The specified email address is invalid!\n<br>";
   }

   if (!empty($error))
   {
      $errorcode = file_get_contents($error_url);
      $replace = "##error##";
      $errorcode = str_replace($replace, $error, $errorcode);
      echo $errorcode;
      exit;
   }

   $internalfields = array ("submit", "reset", "send", "filesize", "formid", "captcha_code", "recaptcha_challenge_field", "recaptcha_response_field", "g-recaptcha-response");
   $message .= $eol;
   $message .= "IP Address : ";
   $message .= $_SERVER['REMOTE_ADDR'];
   $message .= $eol;
   $logdata = '';
   foreach ($_POST as $key => $value)
   {
      if (!in_array(strtolower($key), $internalfields))
      {
         if (!is_array($value))
         {
            $message .= ucwords(str_replace("_", " ", $key)) . " : " . $value . $eol;
         }
         else
         {
            $message .= ucwords(str_replace("_", " ", $key)) . " : " . implode(",", $value) . $eol;
         }
      }
   }
   $body  = 'This is a multi-part message in MIME format.'.$eol.$eol;
   $body .= '--'.$boundary.$eol;
   $body .= 'Content-Type: text/plain; charset=UTF-8'.$eol;
   $body .= 'Content-Transfer-Encoding: 8bit'.$eol;
   $body .= $eol.stripslashes($message).$eol;
   if (!empty($_FILES))
   {
       foreach ($_FILES as $key => $value)
       {
          if ($_FILES[$key]['error'] == 0)
          {
             $body .= '--'.$boundary.$eol;
             $body .= 'Content-Type: '.$_FILES[$key]['type'].'; name='.$_FILES[$key]['name'].$eol;
             $body .= 'Content-Transfer-Encoding: base64'.$eol;
             $body .= 'Content-Disposition: attachment; filename='.$_FILES[$key]['name'].$eol;
             $body .= $eol.chunk_split(base64_encode(file_get_contents($_FILES[$key]['tmp_name']))).$eol;
          }
      }
   }
   $body .= '--'.$boundary.'--'.$eol;
   if ($mailto != '')
   {
      mail($mailto, $subject, $body, $header);
   }
   header('Location: '.$success_url);
   exit;
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Page</title>
<meta name="generator" content="WYSIWYG Web Builder 14 - http://www.wysiwygwebbuilder.com">
<link href="dristikion_Online_website.css" rel="stylesheet">
<link href="page1.css" rel="stylesheet">
<script src="jquery-1.12.4.min.js"></script>
<script>
function ValidateForm1()
{
   var regexp;
   var Combobox1 = document.getElementById('Combobox1');
   if (!(Combobox1.disabled ||
         Combobox1.style.display === 'none' ||
         Combobox1.style.visibility === 'hidden'))
   {
      if (Combobox1.selectedIndex < 0)
      {
         alert("*Needed");
         Combobox1.focus();
         return false;
      }
   }
   var Editbox1 = document.getElementById('Editbox1');
   if (!(Editbox1.disabled || Editbox1.style.display === 'none' || Editbox1.style.visibility === 'hidden'))
   {
      regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]*$/;
      if (Editbox1.value.length != 0 && !regexp.test(Editbox1.value))
      {
         alert("Please Enter Your Name");
         Editbox1.focus();
         return false;
      }
   }
   var Editbox3 = document.getElementById('Editbox3');
   if (!(Editbox3.disabled || Editbox3.style.display === 'none' || Editbox3.style.visibility === 'hidden'))
   {
      regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]*$/;
      if (Editbox3.value.length != 0 && !regexp.test(Editbox3.value))
      {
         alert("Please Enter Your Father's Name");
         Editbox3.focus();
         return false;
      }
   }
   var Combobox2 = document.getElementById('Combobox2');
   if (!(Combobox2.disabled ||
         Combobox2.style.display === 'none' ||
         Combobox2.style.visibility === 'hidden'))
   {
      if (Combobox2.selectedIndex < 0)
      {
         alert("*Needed");
         Combobox2.focus();
         return false;
      }
   }
   var Editbox4 = document.getElementById('Editbox4');
   if (!(Editbox4.disabled || Editbox4.style.display === 'none' || Editbox4.style.visibility === 'hidden'))
   {
      regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]*$/;
      if (Editbox4.value.length != 0 && !regexp.test(Editbox4.value))
      {
         alert("Please Enter Your Occupation");
         Editbox4.focus();
         return false;
      }
   }
   var Editbox2 = document.getElementById('Editbox2');
   if (!(Editbox2.disabled || Editbox2.style.display === 'none' || Editbox2.style.visibility === 'hidden'))
   {
      regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]*$/;
      if (Editbox2.value.length != 0 && !regexp.test(Editbox2.value))
      {
         alert("Please enter only letter characters in the \"Editbox1\" field.");
         Editbox2.focus();
         return false;
      }
   }
   var Editbox6 = document.getElementById('Editbox6');
   if (!(Editbox6.disabled || Editbox6.style.display === 'none' || Editbox6.style.visibility === 'hidden'))
   {
      regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]*$/;
      if (Editbox6.value.length != 0 && !regexp.test(Editbox6.value))
      {
         alert("Enter Your Address");
         Editbox6.focus();
         return false;
      }
   }
   var Editbox7 = document.getElementById('Editbox7');
   if (!(Editbox7.disabled || Editbox7.style.display === 'none' || Editbox7.style.visibility === 'hidden'))
   {
      regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]*$/;
      if (Editbox7.value.length != 0 && !regexp.test(Editbox7.value))
      {
         alert("Please enter only letter characters in the \"Editbox1\" field.");
         Editbox7.focus();
         return false;
      }
   }
   var FileUpload1 = document.getElementById('FileUpload1');
   var FileUpload1_file = document.getElementById('FileUpload1-file');
   if (!(FileUpload1.disabled ||
         FileUpload1.style.display === 'none' ||
         FileUpload1.style.visibility === 'hidden'))
   {
      if (FileUpload1_file.value == "")
      {
         alert("Upload Your Image");
         return false;
      }
      var ext = FileUpload1_file.value.substr(FileUpload1_file.value.lastIndexOf('.'));
      if ((ext.toLowerCase() != ".jpg"))
      {
         alert("Upload Your Image");
         return false;
      }
   }
   var FileUpload2 = document.getElementById('FileUpload2');
   var FileUpload2_file = document.getElementById('FileUpload2-file');
   if (!(FileUpload2.disabled ||
         FileUpload2.style.display === 'none' ||
         FileUpload2.style.visibility === 'hidden'))
   {
      if (FileUpload2_file.value == "")
      {
         alert("Upload Your Image");
         return false;
      }
      var ext = FileUpload2_file.value.substr(FileUpload2_file.value.lastIndexOf('.'));
      if ((ext.toLowerCase() != ".jpg"))
      {
         alert("Upload Your Image");
         return false;
      }
   }
   var Editbox9 = document.getElementById('Editbox9');
   if (!(Editbox9.disabled || Editbox9.style.display === 'none' || Editbox9.style.visibility === 'hidden'))
   {
      regexp = /^[0-9-]*$/;
      if (!regexp.test(Editbox9.value))
      {
         alert("Please Enter Your Number");
         Editbox9.focus();
         return false;
      }
      if (Editbox9.value == "")
      {
         alert("Please Enter Your Number");
         Editbox9.focus();
         return false;
      }
      if (Editbox9.value.length > 10)
      {
         alert("Please Enter Your Number");
         Editbox9.focus();
         return false;
      }
      if (Editbox9.value != "" && !(Editbox9.value == 10))
      {
         alert("Please Enter Your Number");
         Editbox9.focus();
         return false;
      }
   }
   var Checkbox1 = document.getElementById('Checkbox1');
   if (!(Checkbox1.disabled ||
         Checkbox1.style.display === 'none' ||
         Checkbox1.style.visibility === 'hidden'))
   {
      if (Checkbox1.checked != true)
      {
         alert("");
         return false;
      }
   }
   return true;
}
</script>
<script src="wwb14.min.js"></script>
<script>
$(document).ready(function()
{
   $("#FileUpload1 :file").on('change', function()
   {
      var input = $(this).parents('.input-group').find(':text');
      input.val($(this).val());
   });
   $("#FileUpload2 :file").on('change', function()
   {
      var input = $(this).parents('.input-group').find(':text');
      input.val($(this).val());
   });
   $("#Editbox9").change(function()
   {
      if ($('#Editbox9').val() == '10')
      {
         ShowObject('Editbox8', 1);
      }
   });
   $("#Editbox9").trigger('change');
   $("#Checkbox1").change(function()
   {
      if ($('#Checkbox1').is(':checked'))
      {
         ShowObject('Button1', 1);
      }
      if (!$('#Checkbox1').is(':checked'))
      {
         ShowObject('Button1', 0);
      }
   });
   $("#Checkbox1").trigger('change');
});
</script>
</head>
<body>
<div id="container">
<div id="wb_Form1" style="position:absolute;left:0px;top:0px;width:970px;height:2685px;z-index:33;">
<form name="Form1" method="post" action="<?php echo basename(__FILE__); ?>" enctype="multipart/form-data" accept-charset="UTF-8" id="Form1" onsubmit="return ValidateForm1()">
<input type="hidden" name="formid" value="form1">
<div id="wb_Text2" style="position:absolute;left:0px;top:153px;width:970px;height:970px;text-align:center;z-index:0;">
<span style="color:#000000;font-family:Arial;font-size:43px;"><strong><u>Annual Membership Form 2020-21 Dristikon</u></strong></span></div>
<div id="wb_Image2" style="position:absolute;left:0px;top:0px;width:970px;height:153px;z-index:1;">
<img src="images/channel art youtube.jpg" id="Image2" alt=""></div>
<div id="wb_Text1" style="position:absolute;left:0px;top:215px;width:970px;height:1053px;text-align:center;z-index:2;">
<span style="color:#000000;font-family:Arial;font-size:27px;">The persons who are interested to get the membership of *Dristikon* family should fill up and submit this form. Annual subscription for this membership is 150/- In lieu of this subscription the member(s) will be provided with I-card, yearly magazine and many other facilities.</span></div>
<select name="Combobox1" size="1" id="Combobox1" style="position:absolute;left:0px;top:432px;width:970px;height:62px;z-index:3;">
<optgroup label="Select">
<option value="New Membership">New Membership</option>
<option value="Renew Membership">Renew Membership</option>
</optgroup>
</select>
<div id="wb_Text3" style="position:absolute;left:0px;top:397px;width:476px;height:863px;z-index:4;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Select Your Membership</span></div>
<div id="wb_Text4" style="position:absolute;left:0px;top:525px;width:476px;height:863px;z-index:5;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Full Name</span></div>
<input type="text" id="Editbox1" style="position:absolute;left:0px;top:559px;width:960px;height:59px;z-index:6;" name="Editbox1" value="" spellcheck="false">
<div id="wb_Text5" style="position:absolute;left:0px;top:659px;width:476px;height:863px;z-index:7;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Father's Name</span></div>
<input type="text" id="Editbox3" style="position:absolute;left:0px;top:693px;width:960px;height:59px;z-index:8;" name="Editbox1" value="" spellcheck="false">
<div id="wb_Text6" style="position:absolute;left:0px;top:801px;width:476px;height:863px;z-index:9;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Gender</span></div>
<select name="Combobox1" size="1" id="Combobox2" style="position:absolute;left:0px;top:834px;width:970px;height:62px;z-index:10;">
<optgroup label="Select">
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Other">Other</option>
</optgroup>
</select>
<div id="wb_Text7" style="position:absolute;left:0px;top:931px;width:476px;height:27px;z-index:11;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Occupation</span></div>
<input type="text" id="Editbox4" style="position:absolute;left:0px;top:965px;width:960px;height:59px;z-index:12;" name="Editbox1" value="" spellcheck="false">
<div id="wb_Text8" style="position:absolute;left:0px;top:1067px;width:476px;height:27px;z-index:13;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Organisation&nbsp; In Which Associated(if any)</span></div>
<input type="text" id="Editbox2" style="position:absolute;left:0px;top:1101px;width:960px;height:59px;z-index:14;" name="Editbox1" value="" spellcheck="false">
<div id="wb_Text9" style="position:absolute;left:0px;top:1202px;width:476px;height:27px;z-index:15;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Date Of Birth</span></div>
<input type="date" id="Editbox5" style="position:absolute;left:0px;top:1236px;width:960px;height:59px;z-index:16;" name="Editbox1" value="" spellcheck="false" pattern="(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)[0-9]{2}">
<div id="wb_Text10" style="position:absolute;left:0px;top:1347px;width:476px;height:27px;z-index:17;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Permanent Address</span></div>
<input type="text" id="Editbox6" style="position:absolute;left:0px;top:1379px;width:960px;height:59px;z-index:18;" name="Editbox1" value="" spellcheck="false">
<div id="wb_Text11" style="position:absolute;left:0px;top:1475px;width:476px;height:27px;z-index:19;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Current Address(if any)</span></div>
<input type="text" id="Editbox7" style="position:absolute;left:0px;top:1513px;width:960px;height:59px;z-index:20;" name="Editbox1" value="" spellcheck="false">
<div id="wb_Text12" style="position:absolute;left:0px;top:1611px;width:476px;height:27px;z-index:21;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Mobile number</span></div>
<input type="text" id="Editbox8" style="position:absolute;left:0px;top:1649px;width:960px;height:59px;z-index:22;" name="Editbox1" value="" autocomplete="off" spellcheck="false">
<div id="wb_Text13" style="position:absolute;left:0px;top:1745px;width:476px;height:27px;z-index:23;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Attach Current Photo</span></div>
<div id="FileUpload1" class="input-group" style="position:absolute;left:0px;top:1784px;width:970px;height:78px;z-index:24;">
<input class="form-control" type="text" readonly="">
<label class="input-group-btn">
<input type="file" accept=".jpg" name="FileUpload1" id="FileUpload1-file" style="display:none;"><span class="btn">Browse...</span>
</label>
</div>
<div id="wb_Text14" style="position:absolute;left:0px;top:1892px;width:476px;height:27px;z-index:25;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Attach Signature Photo</span></div>
<div id="FileUpload2" class="input-group" style="position:absolute;left:0px;top:1928px;width:970px;height:78px;z-index:26;">
<input class="form-control" type="text" readonly="">
<label class="input-group-btn">
<input type="file" accept=".jpg" name="FileUpload1" id="FileUpload2-file" style="display:none;"><span class="btn">Browse...</span>
</label>
</div>
<div id="wb_Text15" style="position:absolute;left:0px;top:2038px;width:476px;height:27px;z-index:27;">
<span style="color:#000000;font-family:Arial;font-size:24px;">Form Submission Time </span></div>
<input type="time" id="Editbox9" style="position:absolute;left:0px;top:2074px;width:960px;height:59px;z-index:28;" name="Editbox1" value="" spellcheck="false">
<div id="wb_Text16" style="position:absolute;left:0px;top:2209px;width:970px;height:108px;z-index:29;">
<span style="color:#FF0000;font-family:Arial;font-size:24px;">DECLARATION:- All the information I have Provided are true to my notion and &quot;Dristikon Magazine Committee&quot;&nbsp; will not be responsible in any way for any faulty/wrong information . Moreover they have all the rights to cancel this membership in case of any mis-conduct or payment failure.</span><span style="color:#000000;font-family:Arial;font-size:24px;"> </span></div>
<div id="wb_Text17" style="position:absolute;left:100px;top:2343px;width:476px;height:27px;z-index:30;">
<span style="color:#000000;font-family:Arial;font-size:24px;">I Agree</span></div>
<div id="wb_Checkbox1" style="position:absolute;left:24px;top:2333px;width:650px;height:46px;z-index:31;">
<input type="checkbox" id="Checkbox1" name="I Agree" value="I Agree" style="position:absolute;left:0;top:0;" title="I Agree"><label for="Checkbox1"></label></div>
<input type="submit" id="Button1" name="" value="Submit" style="position:absolute;left:150px;top:2465px;width:671px;height:92px;visibility:hidden;z-index:32;">
</form>
</div>
</div>
</body>
</html>