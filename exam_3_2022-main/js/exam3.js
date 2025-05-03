/*
  Do NOT uncomment the lines of code below, they will cause errors.  
  But I am providing it as a template.
  */


/* 
document.querySelector("ELEMENT").addEventListener("EVENT",function(){
     //YOUR CODE
 })
 */



// Problem 1
window.addEventListener("load", function() {
  console.log("Brian Yang");
});

// Problem 2
document.querySelector("h1").addEventListener("click", function() {
  this.style.display = "none";
});


// Problem 3
document.querySelectorAll("figure")[4].addEventListener("dblclick", function(){
  this.style.visibility = "hidden";
});

// Problem 4
// Part 1

document.querySelectorAll("figcaption")[0].addEventListener("mouseenter", function(){
  this.style.fontFamily = "Cursive";
});

// Problem 4
// Part 2
document.querySelectorAll("figcaption")[0].addEventListener("mouseleave", function(){
  this.style.fontFamily = "Times";
});

// Problem 5
// Part 1
document.querySelectorAll("figcaption")[0].addEventListener("focus", function(){
  this.style.fontFamily = "Cursive";
});

// Problem 5
// Part 2
document.querySelectorAll("figcaption")[0].addEventListener("focusout", function(){
  this.style.fontFamily = "Times";
});

// Problem 6
//Need to set tabindex attribute to even focus at all
document.querySelectorAll("figcaption")[1].setAttribute("tabindex", "0");

document.querySelectorAll("figcaption")[1].addEventListener("focus", function(){
  this.style.fontFamily = "Cursive";
});

document.querySelectorAll("figcaption")[1].addEventListener("focusout", function(){
  this.style.fontFamily = "Times";
});

// Problem 7

document.querySelector("#style").addEventListener("click", function(){
  // Part A
  document.querySelector(".container").classList.add("one-third");
  // Part B
  document.querySelector(".container").style.backgroundImage = "url(./images/Purple-Haze.jpg)";
});

// Problem 8
document.querySelector("#style2").addEventListener("click", function(){
  document.querySelectorAll("img")[8].classList.toggle("pizazz");
});


// Problem 9
let pic = document.querySelectorAll("img");

for (let i = 0; i < pic.length; i++) {
  pic[i].addEventListener("click", function(){
    console.log(pic[i].src);
  })
  
}