console.log("Hola Mundo");

document.getElementById("formucontacto").addEventListener("submit",function(event){
    
    event.preventDefault();
    console.log(event)
    let fname=event.target.fname.value;
    let mail= event.target.mail.value;
    let condiciones = event.target.condiciones.checked;
    let infomercial = event.target.infomercial.checked; 
    
    let msj = ""

    if (fname.length < 2 || fname.length > 25) {
        msj+="Nombre fuera de tamaño: 2-25.";

    }

    if(!mail.endsWith(".com") && !mail.endsWith(".es") && mail.includes("@")){
        msj =" Direccion no valida."
    }   
 
 if (!condiciones || !infomercial) {
    msj+=" Por favor, acepta condiciones y envío de publicidad.";

    }

if (msj.length != 0) {
    alert(msj);
    document.body.innerHTML += msj;
    let p = document.createElement("pre");
    let mensaje = document.createTextNode(msj);
    p.style.color = "red";
    p.style.fontSize = "14px";
    p.appendChild(mensaje);

    document.getElementById("formucontacto").appendChild(p); 
  }
})
