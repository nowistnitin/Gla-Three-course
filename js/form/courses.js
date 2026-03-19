function select_courses_func()
{
  var select = document.getElementById("coursesid");
  var typevalue = select.options[select.selectedIndex].value;

  if (typevalue == 'B.Com. LLB (Hons.)')
  {
    document.getElementById("branchsec").style.display = "none";
	document.getElementById("branchpid").innerHTML="<select name='branch' id='branchid' class='input validate[required]'><option value='NA' selected='selected'>NA*</option>\
    </select>";
  }

 else if (typevalue == 'Bachelor of Arts LLB (Hons.)')
  {
    document.getElementById("branchsec").style.display = "none";
	document.getElementById("branchpid").innerHTML="<select name='branch' id='branchid' class='input validate[required]'><option value='NA' selected='selected'>NA*</option>\
    </select>";
  }

 
  else if (typevalue == 'LL.M')
  {
    document.getElementById("branchsec").style.display = "block";
    document.getElementById("branchpid").innerHTML="<select name='branch' id='branchid' class='input validate[required]'><option value='' selected='selected'>Select Branch*</option>\
    <option value='Cyber and Data Privacy Law.'>Cyber and Data Privacy Law</option>\
    <option value='Banking, Finance and Insurance Law.'>Banking, Finance and Insurance Law</option>\
    </select>";
  }
 

}