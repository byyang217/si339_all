document.querySelector("#ch3form").addEventListener("submit", function(){
    let x = document.querySelector('input[name="standing"]');
    let y = document.querySelector('input[name="gradDate"]');
    console.log(x);
    if(x == null || y == null){
        alert("Please select both");
    }
})