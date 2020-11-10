// Luodaan sisältöä sivulle 
var r = document.getElementById("root");
    r.innerHTML = "<h2>Tervetuloa sivulle</h2>";
// r.innerHTML += "<p>Tämä on ensimmäinen SPA ohjelma </p>";
    
var uusi = document.createElement('p')
uusi.innerHTML = "Tämä on ensimmäinen SPA ohjelma";
uusi.setAttribute('id', 'newData');
document.getElementById('root').appendChild(uusi);

function teeJotain() {
    console.log("Hoi Maailma!");
}
// Lisätään nappiin kuuntelija
var n = document.getElementsByTagName('button');
n[0].addEventListener("click", function () { alert("Hello World!"); });

var o = document.getElementsByTagName('h2');
o[0].addEventListener("click", function(){ alert("Otsikkoa klikattiin!"); });