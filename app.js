var inputField = document.getElementById('inputField');

function pushBtn(obj){
    var pushed = obj.innerHTML;

    if(pushed == '='){
          //Calculate total(due to eval())
        inputField.innerHTML = eval(inputField.innerHTML);
    }
    else if (pushed == 'AC'){
//Clear Calculator
inputField.innerHTML = '0';
    }
    else{
        if(inputField.innerHTML == '0'){
inputField.innerHTML = pushed;
        }else{
            inputField.innerHTML += pushed;
        }
    }

};