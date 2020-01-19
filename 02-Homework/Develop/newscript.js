var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*()_+-=';

var charNum = document.querySelector("charNum");
var numBox = document.querySelector("num");
var symBox = document.querySelector("sym");
var generateEl = document.querySelector("generate");
var yourPw = document.querySelector("password");

generateEl.addEventListener("click", function(e) {
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += '':
    yourPw.value = password(charNum.value, characters);
});

function password(length, characters){
    var pwd = '';
    for (var i = 0; i<length; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
};
