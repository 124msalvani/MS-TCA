var coloridvalue;
var chair;
var price;
var price = document.getElementById("price");

function removeselection() {
    document.getElementById("blue").classList.remove("selected");
    document.getElementById("cyan").classList.remove("selected");
    document.getElementById("orange").classList.remove("selected");
    document.getElementById("purple").classList.remove("selected");
    document.getElementById("red").classList.remove("selected");
    document.getElementById("green").classList.remove("selected");
    document.getElementById("brown").classList.remove("selected");
  
};

document.getElementById("blue").addEventListener('mouseover', starterBlue);
document.getElementById("cyan").addEventListener('mouseover', starterCyan);
document.getElementById("orange").addEventListener('mouseover', starterOrange);
document.getElementById("purple").addEventListener('mouseover', starterPurple);
document.getElementById("red").addEventListener('mouseover', starterRed);
document.getElementById("green").addEventListener('mouseover', starterGreen);
document.getElementById("brown").addEventListener('mouseover', starterBrown);
/*
document.getElementById("red").addEventListener('mouseover', starterRed);
document.getElementById("yellow").addEventListener('mouseover', starterYellow);
document.getElementById("blue").addEventListener('mouseover', starterBlue);
document.getElementById("beige").addEventListener('mouseover', starterBeige);
*/

function starterRed() {
  coloridvalue = "chimchar";
  chair = 'img/starter_' + coloridvalue + '.jpg';
  document.getElementById("starters").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("red").classList.add("selected");
  document.getElementById("price").style.color = "red";
  document.getElementById("price").innerHTML = "$49.99" + "!";
};

function starterOrange() {
    coloridvalue = "piplup-halloween";
    chair = 'img/starter_' + coloridvalue + '.jpg';
    document.getElementById("starters").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("orange").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};

function starterPurple() {
    coloridvalue = "piplup-large";
    chair = 'img/starter_' + coloridvalue + '.jpg';
    document.getElementById("starters").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("purple").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};

function starterCyan() {
    coloridvalue = "piplup-sleep";
    chair = 'img/starter_' + coloridvalue + '.jpg';
    document.getElementById("starters").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("cyan").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
 };

function starterBlue() {
    coloridvalue = "piplup";
    chair = 'img/starter_' + coloridvalue + '.jpg';
    document.getElementById("starters").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("blue").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};

function starterGreen() {
    coloridvalue = "turtwig";
    chair = 'img/starter_' + coloridvalue + '.jpeg';
    document.getElementById("starters").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("green").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
  };

  function starterBrown() {
    coloridvalue = "turtwig-pot";
    chair = 'img/starter_' + coloridvalue + '.jpg';
    document.getElementById("starters").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("brown").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
  };


/*
function starterYellow() {
  coloridvalue = "yellow";
  chair = 'img/starter_' + coloridvalue + '@2x.jpg';
  document.getElementById("product-photo").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("yellow").classList.add("selected");
  document.getElementById("price").style.color = "green";
  document.getElementById("price").innerHTML = "$74.99" + "!";
};

function starterBlue() {
  coloridvalue = "blue";
  chair = 'img/starter_' + coloridvalue + '@2x.jpg';
  document.getElementById("product-photo").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("blue").classList.add("selected");
  document.getElementById("price").style.color = "black";
  document.getElementById("price").innerHTML = "$89.99";
};

function starterBeige() {
  coloridvalue = "beige";
  chair = 'img/starter_' + coloridvalue + '@2x.jpg';
  document.getElementById("product-photo").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("beige").classList.add("selected");
  document.getElementById("price").style.color = "red";
  document.getElementById("price").innerHTML = "$49.99" + "!";
}; */
