window.addEventListener("load", function(){
    console.log("page is fully loaded");

    document.querySelector("h1").classList.add("heading");
  });

window.addEventListener("dblclick", function(){
    console.log("page is dblclick");
    alert(new Date());
});

document.querySelector('#toggle').addEventListener("click", function(){
    if(document.getElementById("toggle").checked){
        document.getElementById("emailBox").classList.remove("hidden");
    }

    else{
        document.getElementById("emailBox").classList.add("hidden");;
    }
})
