function challenge1(){
    if(document.getElementById("subscribe").checked){
        document.getElementById("emailDiv").style.display = "block";
    }

    else{
        document.getElementById("emailDiv").style.display = "none";
    }
}

function challenge2(){
    if(document.getElementById("sameAddress").checked){
        document.getElementById("home").value = document.getElementById("bill").value;
        document.getElementById("home").disabled = true;
    }
    else{
        document.getElementById("home").value = "";
        document.getElementById("home").disabled = false;
    }
}

function challenge3(){
    let x = document.querySelector("standing");
    let y = document.querySelector("gradDate");

    
}