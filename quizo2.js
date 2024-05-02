const emai = document.getElementById('inp1');
const Name = document.getElementById('inp2');
const phon = document.getElementById('inp3');
const name = Name.value;
function next(){
if(emai.value==''||Name.value==''||phon.value==''){
    alert('pls fill up your details');
}
else{
    window.location.href="quizo3.html";
}
}