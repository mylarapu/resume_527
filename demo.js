function push(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
if( xhr.readyState===4&&xhr.status=="200"){
callback(xhr.responseText);

}

  }
  xhr.send();

}
  //calling function
  push("data.json",function(text){
     let ind=JSON.parse(text);
console.log(ind);
profile(ind.basics);

}  )
// for getting through id
var main=document.getElementById("main");
// for getting through class
// var maindocument.queryselect for("main");

var left=document.createElement("div");
left.classList.add("left");
left.setAttribute("id","left");
// appending to main
  main.appendChild(left);
  function profile(basic){
var image=document.createElement("img");
image.src=basic.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=basic.name;
left.appendChild(name);
var mail=document.createElement("h1");
mail.textContent=basic.mail;
left.appendChild(mail);
var phone=document.createElement("h1");
phone.textContent=basic.phone;
left.appendChild(phone);
}
