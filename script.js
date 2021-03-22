
selectedRow = null;

function dataCollector() {


    if (validate()) {
        let returns = data();
        if(selectedRow == null){
            savingData(returns);
        }else{
            update(returns)
        }
    }

    clear();
}


function data() {
    var formularyData = {};
    
    formularyData ['name'] = document.getElementById('name').value;
    formularyData ['age'] = document.getElementById('age').value;
    formularyData ['career'] = document.getElementById('career').value;
    formularyData ['text'] = document.getElementById('text').value;
    
    return formularyData;
}

function savingData(data) {
    
    var table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.age + ' age';

    cell1 = newRow.insertCell(2);
    cell1.innerHTML = data.career;
    
    cell2 = newRow.insertCell(3);
    cell2.innerHTML = data.text;
    
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a><br>
                       <a onClick="onDelete(this)">Delete</a>`;
    
}

function clear() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('career').value = '';
    document.getElementById('text').value = '';

}

function onDelete(td){
    if(confirm('Are you sure you want to delete')){row = td.parentElement.parentElement;
    document.getElementById('employeeList').deleteRow(row.rowIndex);
    clear()}
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('age').value = selectedRow.cells[1].innerHTML;
    document.getElementById('career').value = selectedRow.cells[2].innerHTML;
    document.getElementById('text').value = selectedRow.cells[3].innerHTML;
}

function update(data){
    selectedRow.cells[0].innerHTML = data.name;
    selectedRow.cells[1].innerHTML = data.age;
    selectedRow.cells[2].innerHTML = data.career;
    selectedRow.cells[3].innerHTML = data.text;
}

function validate(){
    isValid = true;
    let name = document.getElementById("name");
    if (name.value == '') {
        isValid = false;
        name.placeholder = "Field Incomplete";
        name.style.background = "red";
        
    }else if(name.value) {
        isValid = true;
        name.placeholder = "Tell Me your Name";
        name.style.background = "transparent";
        
    }
    return isValid;
}

console.log('funfando')