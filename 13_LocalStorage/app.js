const item  = document.getElementById('item');
const submit = document.getElementById('submit');
const val = JSON.parse(localStorage.getItem('items')) || [];
const itemsList = document.getElementById('list');
function add(e){
    e.preventDefault()
    if(item.value.length == 0){
        item.style.backgroundColor = "red"
        return
    }
    const text = item.value;
    const it = {
        text, done:false
    };
    val.push(it);
    localStorage.setItem('items', JSON.stringify(val));
    populateList(val,itemsList);
    item.value = '';
}

function populateList(plates = [],l){
    // var i = 0;
    // plates.forEach(plate =>{
        //     itemsList.innerHtml += `<li>
        //     <input type="checkbox" name="item${i}" class="check">
        //     <label for="item${i}">${plate.text}</label>
        // </li>`;
        // i = i+1;
        console.log(val)
        l.innerHTML = plates.map((plate,i) => {
            return `
            <li><input type="checkbox" name="item${i}" class="check"><label for="item${i}">${plate.text}</label></li>
            `;
        }).join('');
    }
    
    item.addEventListener('input',()=>{
        if(item.value.length>0){
            item.style.backgroundColor = "white"
        }
    })
    submit.addEventListener('click', add);
    populateList(val,itemsList);
