console.log("Hello World");

document.getElementById("carta2").addEventListener("submit",function(event){
    
    event.preventDefault();
    console.log(event)
    
    let mail= (event.target.mail.value);

    if(!mail.endsWith(".com") && !mail.endsWith(".es") && mail.includes("@")){
    alert("Direccion no valida "+mail)
 }
 


})







