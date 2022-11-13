let string = '';

const dialNum = document.getElementsByClassName('numbers');

for (let number of dialNum) {
    number.addEventListener('click', function(event) {
        if(event.target.innerHTML == '='){
            string = eval(string);
            document.getElementById('displayNum').value = string;
        }
        else if(event.target.innerHTML == 'AC'){
            console.log(event.target);
            string = "";
            document.getElementById('displayNum').value = string;
        }
        else{
            string = string + event.target.innerHTML;
            document.getElementById('displayNum').value = string;
        }
    })
}