window.addEventListener("load", function(){
    console.log(document.querySelector("#billing").innerHTML);
});

document.querySelector("input").addEventListener("click", function(){
    if(document.querySelector("input").checked){
        document.getElementById("home").value = document.getElementById("billing").value;
        document.getElementById("home").disabled = true;
    }
    else{
        document.getElementById("home").value = "";
        document.getElementById("home").disabled = false;
    }
});