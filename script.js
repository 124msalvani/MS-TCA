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
    document.getElementById("white").classList.remove("selected");;
    document.getElementById("beige").classList.remove("selected");;
    document.getElementById("scarlet").classList.remove("selected");;
    document.getElementById("gold").classList.remove("selected");;
    document.getElementById("black").classList.remove("selected");
document.getElementById("red2").classList.remove("selected");
document.getElementById("orange2").classList.remove("selected");
document.getElementById("pink").classList.remove("selected");
document.getElementById("pink2").classList.remove("selected");
document.getElementById("pink3").classList.remove("selected");

  
};

document.getElementById("blue").addEventListener('mouseover', starterBlue);
document.getElementById("cyan").addEventListener('mouseover', starterCyan);
document.getElementById("orange").addEventListener('mouseover', starterOrange);
document.getElementById("purple").addEventListener('mouseover', starterPurple);
document.getElementById("red").addEventListener('mouseover', starterRed);
document.getElementById("green").addEventListener('mouseover', starterGreen);
document.getElementById("brown").addEventListener('mouseover', starterBrown);

document.getElementById("white").addEventListener('mouseover', legendWhite);
document.getElementById("beige").addEventListener('mouseover', legendBeige);
document.getElementById("scarlet").addEventListener('mouseover', legendScarlet);
document.getElementById("gold").addEventListener('mouseover', legendGold);
document.getElementById("lightblue").addEventListener('mouseover', legendLightblue);
document.getElementById("lime").addEventListener('mouseover', legendLime);

document.getElementById("black").addEventListener('mouseover', trainerBlack);
document.getElementById("red2").addEventListener('mouseover', trainerRed2);
document.getElementById("orange2").addEventListener('mouseover', trainerOrange2);
document.getElementById("pink").addEventListener('mouseover', trainerPink);
document.getElementById("pink2").addEventListener('mouseover', trainerPink2);
document.getElementById("pink3").addEventListener('mouseover', trainerPink3);
/*
document.getElementById("yellow").addEventListener('mouseover', starterYellow);
document.getElementById("pink").addEventListener('mouseover', starterPink);
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
  document.getElementById("price").innerHTML = "$29.99" + "!";
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
    document.getElementById("price").innerHTML = "$29.99" + "!";
};

function starterPurple() {
    coloridvalue = "piplup-large";
    chair = 'img/starter_' + coloridvalue + '.jpg';
    document.getElementById("starters").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("purple").classList.add("selected");
    document.getElementById("price").style.color = "black";
    document.getElementById("price").innerHTML = "$49.99" + "";
};

function starterCyan() {
    coloridvalue = "piplup-sleep";
    chair = 'img/starter_' + coloridvalue + '.jpg';
    document.getElementById("starters").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("cyan").classList.add("selected");
    document.getElementById("price").style.color = "black";
    document.getElementById("price").innerHTML = "$49.99" + "";
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
    document.getElementById("price").innerHTML = "$29.99" + "!";
  };

function starterBrown() {
    coloridvalue = "turtwig-pot";
    chair = 'img/starter_' + coloridvalue + '.jpg';
    document.getElementById("starters").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("brown").classList.add("selected");
    document.getElementById("price").style.color = "black";
    document.getElementById("price").innerHTML = "$49.99" + "";
  };
/////////////////////////
function legendWhite() {
    coloridvalue = "arceus";
    chair = 'img/legendary_' + coloridvalue + '.jpg';
    document.getElementById("legend").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("white").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function legendBeige() {
    coloridvalue = "birds";
    chair = 'img/legendary_' + coloridvalue + '.jpg';
    document.getElementById("legend").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("white").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function legendScarlet() {
    coloridvalue = "hooh";
    chair = 'img/legendary_' + coloridvalue + '.jpg';
    document.getElementById("legend").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("white").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function legendGold() {
    coloridvalue = "hooh-shiny";
    chair = 'img/legendary_' + coloridvalue + '.jpg';
    document.getElementById("legend").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("white").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function legendLightblue() {
    coloridvalue = "lugia";
    chair = 'img/legendary_' + coloridvalue + '.jpg';
    document.getElementById("legend").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("white").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function legendLime() {
    coloridvalue = "rayqu";
    chair = 'img/legendary_' + coloridvalue + '.jpg';
    document.getElementById("legend").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("white").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};


function trainerRed2() {
    coloridvalue = "may";
    chair = 'img/trainer_' + coloridvalue + '.jpg';
    document.getElementById("trainer").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("red2").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function trainerBlack() {
    coloridvalue = "6pak";
    chair = 'img/trainer_' + coloridvalue + '.png';
    document.getElementById("trainer").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("black").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function trainerPink3() {
    coloridvalue = "dawn";
    chair = 'img/trainer_' + coloridvalue + '.jpg';
    document.getElementById("trainer").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("pink3").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function trainerOrange2() {
    coloridvalue = "bea";
    chair = 'img/trainer_' + coloridvalue + '.jpg';
    document.getElementById("trainer").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("orange2").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function trainerPink2() {
    coloridvalue = "rosa";
    chair = 'img/trainer_' + coloridvalue + '.jpg';
    document.getElementById("trainer").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("pink2").classList.add("selected");
    document.getElementById("price").style.color = "red";
    document.getElementById("price").innerHTML = "$49.99" + "!";
};
function trainerPink() {
    coloridvalue = "serena";
    chair = 'img/trainer_' + coloridvalue + '.jpg';
    document.getElementById("trainer").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("pink").classList.add("selected");
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
