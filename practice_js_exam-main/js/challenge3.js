window.addEventListener("load", function(){
    this.alert(document.querySelectorAll("figcaption")[1].innerHTML);
    console.log(document.querySelector("img").getAttribute("src"));
});

let pic = document.querySelectorAll("img");

pic[1].setAttribute("tabindex", "0");
let display = document.querySelector("#display");
console.log(pic[1].getAttribute("src"))
for(let i = 0; i < pic.length; i++) {
    console.log("img stuff");
    pic[i].addEventListener("mouseenter", function() {
        document.querySelector("#display").innerHTML = pic[i].getAttribute("alt");
        document.querySelector("#display").style.backgroundImage = "url(" +this.src+ ")";
        console.log(pic[i].getAttribute("src"))
        this.style.visibility = "hidden";
    });

    pic[i].addEventListener("mouseleave", function() {
        document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text.";
        document.querySelector("#display").style.backgroundImage = "";
        this.style.visibility = "visible";
    });

    pic[i].addEventListener("focus", function() {
        document.querySelector("#display").innerHTML = pic[i].getAttribute("alt");
        document.querySelector("#display").style.backgroundImage = "url(" +this.src+ ")";
        console.log(pic[i].getAttribute("src"))
        this.style.visibility = "hidden";
    });
    pic[i].addEventListener("focusout", function() {
        document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text.";
        document.querySelector("#display").style.backgroundImage = "";
        this.style.visibility = "visible";
    });
};

;