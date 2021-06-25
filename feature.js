function create(){
   decision = confirm("Are you sure, you want to 'create' this container");
   if(decision == true){
        img = document.getElementById("c_i_name").value;
        cname = document.getElementById("c_c_name").value;
        xhr = new XMLHttpRequest();
        xhr.open('GET','http://192.168.43.51/cgi-bin/create.py?i='+img+'&n='+cname,'true');
        xhr.send();
        xhr.onload=function (){
            output = xhr.responseText;
            document.getElementById("im").innerHTML = " ";
            output = output + "\n\n!!! Container Created !!!";
            document.getElementById("op").innerHTML = output;
        }
   }
}

function image(){
    img = document.getElementById("p_i_name").value;
    xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.43.51/cgi-bin/image.py?i='+img,'true');
    xhr.send();
    xhr.onload=function (){
        output = xhr.responseText;
        document.getElementById("im").innerHTML = output;
    }
 
}

function list(){
    xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.43.51/cgi-bin/list.py','true');
    xhr.send();
    xhr.onload=function(){
        output = xhr.responseText;
	document.getElementById("im").innerHTML = " ";
        document.getElementById("op").innerHTML = output;
    }

}

function del(){
    decision = confirm("Are you sure, you want to 'Delete' this container");
    if(decision == true){
            cname = document.getElementById("d_c_name").value;
            xhr = new XMLHttpRequest();
            xhr.open('GET','http://192.168.43.51/cgi-bin/del.py?n='+cname,'true');
            xhr.send();
            xhr.onload=function (){
                output = xhr.responseText;
		document.getElementById("im").innerHTML = " ";
		output = "Container " + output + " Deleted"
                document.getElementById("op").innerHTML = output;
            }
    }
}
