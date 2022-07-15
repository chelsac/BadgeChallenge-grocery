    // creating an xhr oject 
    var xhttp= new XMLHttpRequest();
    // event listner
    xhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {
           var res = JSON.parse(this.responseText);
           var out="<select name='option' id='department'><option value='All'>All</option>";
           var p=res.grocery;
           
           var arr=[];
           for(let i=0;i<p.length;i++){
            arr.push(p[i].Department);
            // out +="<tr> <th>" + p[i].No +"</th>" + "<th>" + p[i].Name +"</th>" +"<th>" + p[i].Quantity +"</th>" +"<th>" + p[i].Unit +"</th>" +"<th>" + p[i].Department +"</th>" +"<th>"  + p[i].Notes +"</th>"  +"</tr>";
           }
          //  out+="</table>";
          
          let unique = [...new Set(arr)];
          // console.log(unique);
          for(let i=0;i<unique.length;i++){
            // console.log(unique[i]);
             out +="<option value='"+unique[i]+"'>"+unique[i]+"</option>";
            //  console.log(out);
           }
           out +="</select>";
           document.getElementById("select1").innerHTML=out;
           out="<table> <tr><th>No.</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
           for(let i=0;i<p.length;i++){
            out +="<tr> <th>" + p[i].No +"</th>" + "<th>" + p[i].Name +"</th>" +"<th>" + p[i].Quantity +"</th>" +"<th>" + p[i].Unit +"</th>" +"<th>" + p[i].Department +"</th>" +"<th>"  + p[i].Notes +"</th>"  +"</tr>";
           }
           out+="</table>";
          document.getElementById("demo").innerHTML=out;
          ;
           }

    };
    
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();

function ajaxfn(){

    // creating an xhr oject 
    var xhttp= new XMLHttpRequest();
    // event listner
    xhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {
           var res = JSON.parse(this.responseText);
           var out="<table> <tr><th>No.</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
           var p=res.grocery;
           var newp=p.filter(checkdepartment);
           console.log(newp);
           for(let i=0;i<newp.length;i++){
             out +="<tr> <th>" + newp[i].No +"</th>" + "<th>" + newp[i].Name +"</th>" +"<th>" + newp[i].Quantity +"</th>" +"<th>" + newp[i].Unit +"</th>" +"<th>" + newp[i].Department +"</th>" +"<th>"  + newp[i].Notes +"</th>"  +"</tr>";
            }
            out+="</table>";
           document.getElementById("demo").innerHTML=out;
           document.getElementById("heading").innerHTML="<h1>Grocery Shopping List</h1>";
           }

    };
    
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
    
    }

    function checkdepartment(a) {
      if(document.getElementById("department").value=="All"){
        return true;
      }
      else{
        return a.Department == document.getElementById("department").value;
      }
    }
    
    function myFunction() {
      document.getElementById("demo").innerHTML = ages.filter(checkAge);
    }