// document.querySelector("button").addEventListener("click", handleClick("Hai"));

// membuat function menggunakan string concatenation
// function handleClick(great) {
//   alert("Hello, world!" + great);
// }

// membuat function menggunakan template literals
// function handleClick(great) {
//   alert(`Hello, temen-temen, ${great}`);
// }

// cara mencoba penerapan event listener pada button
// console.log(document.querySelectorAll("button")[6]);

// array button
let totalButton = document.querySelectorAll("button").length;

for (let i = 0; i < totalButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // alert("Hello, temen-temen! ini dari button index ke " + i);
    // alert(`Hello, temen-temen! ini dari button index ke ${i}`);

    // let audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    // membuat efek button
    // console.log(this);

    // memnodifikasi color style button
    this.style.color = "yellow";

    // membuat efek suara
    // bisa juga menggunakan indexnya untuk switch casenya
    switch (this.innerHTML) {
      case "w":
        let audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;
      case "a":
        let audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;
      case "s":
        let audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;
      case "d":
        let audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;
      case "j":
        let audio5 = new Audio("sounds/snare.mp3");
        audio5.play();
        break;
      case "k":
        let audio6 = new Audio("sounds/kick-bass.mp3");
        audio6.play();
        break;
      case "l":
        let audio7 = new Audio("sounds/crash.mp3");
        audio7.play();
        break;
      default:
        console.log(this.innerHTML);
    }
  });
}




//melakukan sesuatu setelah button di click
