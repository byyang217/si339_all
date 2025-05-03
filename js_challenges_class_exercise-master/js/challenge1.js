document.querySelector('#subscribe').addEventListener("click", function(){
    if(document.getElementById("subscribe").checked){
        document.getElementById("emailDiv").style.display = "block";
    }

    else{
        document.getElementById("emailDiv").style.display = "none";
    }
})