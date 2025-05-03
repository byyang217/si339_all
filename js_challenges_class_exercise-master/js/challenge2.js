document.querySelector('#sameAddress').addEventListener("click", function(){
    if(document.getElementById("sameAddress").checked){
        document.getElementById("home").value = document.getElementById("bill").value;
        document.getElementById("home").disabled = true;
    }
    else{
        document.getElementById("home").value = "";
        document.getElementById("home").disabled = false;
    }
})