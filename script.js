
function process () {

    var name = document.getElementById("name").value ; 
    
    var message = document.getElementById("message").value ; 
    
    
    
    
    document.getElementById("content").innerHTML =
     `Thank you ${name} for your message. Your message has been received.</br>
    We will contact with you as soon as possible.<br><br>
    Your message: "<i>${message}</i>"`;
}


