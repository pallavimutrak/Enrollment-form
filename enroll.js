var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["addr"] = document.getElementById("addr").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["email"] = document.getElementById("email").value;
    formData["DOB"] = document.getElementById("DOB").value;
    formData["Gender"] = document.getElementById("Gender").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Eform").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.addr;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.contact;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.DOB;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Gender
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>`;
                       
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("addr").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("email").value = "";
    document.getElementById("DOB").value = "";
    document.getElementById("Gender").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("addr").value = selectedRow.cells[1].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("DOB").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.addr;
    selectedRow.cells[2].innerHTML = formData.contact;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.DOB;
    selectedRow.cells[5].innerHTML = formData.Gender;
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}