let textbox = document.getElementById("messageEnter")
let isTyping = false

function messageActivated()
{
    textbox.innerText = ""
}

window.addEventListener('click', function(e){
    if (e.target.id == "messageEnter")
    {
    isTyping = true
    return;
    } 
    isTyping = false
    if(textbox.innerText == "")
    {
        textbox.innerText = "Message @spooketti"
    }
    });

document.addEventListener("keydown",function(e)
{
    if(e.key === "Enter" && isTyping == true)
    {
        textbox.innerText = "Message @spooketti"
    }
    console.log(e.key)
})