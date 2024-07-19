const changeMode = document.getElementById('change-mode');
const para = document.getElementById('para1');
const fullwindow = document.body;
let lightMode = true;

function EnableMode(){
    if(lightMode === true){
        fullwindow.style.backgroundColor = 'black';
        para.style.color = '#fff';
        changeMode.value = "Dark mode";
        lightMode = false;
    }
    else{
        fullwindow.style.backgroundColor = 'white';
        para.style.color = 'black';
        changeMode.value = "light mode";
        lightMode = true;
    }
}

changeMode.addEventListener('click', EnableMode);