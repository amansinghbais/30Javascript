// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxes = document.querySelectorAll('.input');

var lastChecked;

function handleCheck(e){
    var inbetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox =>{
            if(checkbox === lastChecked || checkbox === this){
                inbetween = !inbetween;
            }
            if(inbetween){
                checkbox.checked = true;
            }
        }); 
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));