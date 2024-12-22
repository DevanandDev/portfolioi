function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };


const serviceID ="service_9es8i8q";
const templateID ="template_sp61ecf"

emailjs
.send(serviceID,templateID,params)
.then((res) =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("your message send succesfully");
    })
    .catch((err) => console.log(err));

}







