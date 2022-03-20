const contact = document.querySelector(".contact");

contact.innerHTML = `
    <div><a href="https://www.facebook.com/profile.php?id=100000763151005"><img src="resources/facebook logo.png" alt="facebook" class = "fb" id = "smPic"></a></div>
    <div><a href="https://www.instagram.com/alexandru.c4/"><img src="resources/instagram logo.png" alt="instagram" class= "insta" id = "smPic"></a></div>
    <div><img src="resources/gmail logo.png" alt="email" class= "email" id = "smPic" style="object-fit: cover" title="alexandru.ciuta.21@gmail.com"></div>
    <div><img src="resources/WhatsApp logo.png" alt="telefon" class= "phone" id = "smPic"></div>
    <div><a href="https://github.com/AlexC41/Portfolio-v2"><img src="resources/GitHub logo.png" alt="GitHub" class= "github" id = "smPic"></a></div>
    <div><a href="https://www.linkedin.com/in/alex-ciuta-6a06b1170/"><img src="resources/LinkedIn logo.png" alt="LinkedIn" class= "linkedin" id = "smPic"></a></div>
`


function HnS(x){
    if(x.style.display === "none") {
        x.style.display = "flex"
        if (x.className === "hContainer") {
            x.style.flexDirection = "row"
        } else {
            x.style.flexDirection = "column"
        }
    } else {
        x.style.display = "none"
    }
}