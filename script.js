function ajaxfn(){

    // creating an xhr oject 
    var xhttp= new XMLHttpRequest();
    // event listner
    xhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {
           var res = JSON.parse(this.responseText);
           var out="<table> <tr><th>No.</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
           var p=res.grocery;
           for(let i=0;i<p.length;i++){
            out +="<tr> <th>" + p[i].No +"</th>" + "<th>" + p[i].Name +"</th>" +"<th>" + p[i].Quantity +"</th>" +"<th>" + p[i].Unit +"</th>" +"<th>" + p[i].Department +"</th>" +"<th>"  + p[i].Notes +"</th>"  +"</tr>";
           }
           out+="</table>";
           document.getElementById("demo").innerHTML=out;
           }

    };
    
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
    
    }