function result()  
{
    
  var students ={
    DAVID : {
        math : "95",
        physics: "80",
        literature :"75"
    },
    SHAWN : {
        math : "95",
        physics: "100",
        literature :"75"
    },
    BELLA : {
        math : "100",
        physics: "100",
        literature :"75"
    } 
  }

   var studentname= document.getElementById('studentname').value;
   var input = studentname.toUpperCase();
  var definition = students[input];
   var output =document.getElementById("output");

  if(definition == undefined) {
    output.innerHTML ='<hr> There is no information about this student. <hr>'
  }
 else {
    output.innerHTML ='<hr> Math score is 100 . <hr> Physics score is 80. <hr> Literature score is 79 <hr>'
    
   }
}