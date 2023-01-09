
var arr = [];

function vazifaTayinlash() {
    var input = document.querySelector('#inputText');
    var text = input.value;
    var li = "";

    arr.push(text);

    for(index in arr) {
        li += "<li>" + arr[index] + "<button onclick='chizish(this)'>Bajardim</button><button onclick='ochirish(this)'>O'chirish</button></li>";
    }

    var ul = document.querySelector('#ul');
    ul.innerHTML = li;

    input.value= "";
}


function chizish(button) {
    button.parentNode.style.textDecoration='line-through';
}

function ochirish(ochirisho) {
    var liText = ochirisho.parentNode.innerText.slice(0, -17);
    var index = arr.indexOf(liText);  
    delete arr[index]
    ochirisho.parentNode.remove();
 
 } 
 
 