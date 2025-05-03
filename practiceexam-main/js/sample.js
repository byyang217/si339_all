document.querySelector('#part1Checkbox').addEventListener("click", function(){
    if(document.getElementById("part1Checkbox").checked){
        document.getElementById("part2").classList.remove("closed");
    }

    else{
        document.getElementById("part2").classList.add("closed");;
    }
})

document.querySelector("#repeat").addEventListener("click", function(){
    if(document.querySelector("#repeat").checked){
        document.getElementById("message2").value = document.getElementById("message1").value;
        document.getElementById("message2").disabled = true;
    }
    else{
        document.getElementById("message2").value = "";
        document.getElementById("message2").disabled = false;
    }
});

let pic = document.querySelectorAll("img")[4];
pic.setAttribute("src", "0");

pic.addEventListener("mouseenter", function() {
    pic.src = document.querySelectorAll("img")[1].src;
});

pic.addEventListener("mouseleave", function() {
    pic.setAttribute("src", "");
});

pic.addEventListener("focus", function() {
    pic.src = document.querySelectorAll("img")[1].src;
});

pic.addEventListener("focusout", function() {
    pic.setAttribute("src", "");
});