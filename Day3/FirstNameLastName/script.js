function getFormvalue()
{
  var element=document.getElementById("form1");
  for (var i=0;i<element.length;i++)
  {
   if (element.elements[i].value!='Submit')
    {  
      console.log(element.elements[i].value);
     }  
   }
}
