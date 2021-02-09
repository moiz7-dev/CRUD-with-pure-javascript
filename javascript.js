//checks for empty input field (runs in every 1ms)
setInterval(function(){if ($('#username').val() == "" || $('#emailid').val() == "" ){
    document.getElementById('submitBtn').disabled = true;     //submit button disable  
}}, 1);

//checks for input fields validation
function checkVal() {
    if ($('#username').val() != "" && $('#emailid').val() != "") {  //checks for empty input fields
        if(validateEmail($('#emailid').val())){     //checks for email validation 
            document.getElementById('submitBtn').disabled = false;  //submit button enable
        }else{
            document.getElementById('submitBtn').disabled = true;   //submit button disable
        }
    } else {    
        document.getElementById('submitBtn').disabled = true;   //submit button disable
    }
}

//gets value of form input onclick submit button
function getValue() {
    var obj = {};
    obj.name = $('#username').val();
    obj.email = $('#emailid').val();
        addData(obj);
        reset();
}

//adding data to form
function addData(data) {
    editDelete = '<a onclick="dataEdit(this)"><i class="fas fa-edit" title="Edit"></i></a>  <a onclick="dataDelete(this)"><i class="fas fa-trash-alt" title="Delete"></i></a>';
    table = document.getElementById("myTable");
    currentRow = table.insertRow(table.length);
    dname = currentRow.insertCell(0).innerText = data.name;
    demail = currentRow.insertCell(1).innerText = data.email;
    daction = currentRow.insertCell(2).innerHTML = editDelete;
}

//edit data 
function dataEdit(data) {
    currentRow = data.closest('tr'); //gets the current row element
    document.getElementById('username').value = currentRow.childNodes[0].innerHTML;
    document.getElementById('emailid').value = currentRow.childNodes[1].innerHTML;
    $("#submitBtn").attr("onclick","event.preventDefault();changeVal(currentRow)");
}

//editing the value of selected data
function changeVal(currentRow)  {
    currentRow.childNodes[0].innerHTML = document.getElementById('username').value;
    currentRow.childNodes[1].innerHTML = document.getElementById('emailid').value;
    $("#submitBtn").removeAttr("onclick");
    reset();
}

//Deletes the data
function dataDelete(data) {
    row = data.closest('tr')
    var cnfm_popup = confirm("Are you sure!");  //confirm popup on deletion
    if (cnfm_popup == true) {
        $(row).fadeOut("slow", () => row.remove());
    } else { false }

}

//resets the form field
function reset() {
    document.getElementById('myForm').reset();
}

//email validation function
function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
  }  

//shows error when field is empty (name)
function errorFuncName(){
    if ($('#username').val() == ""){
        $('.error:eq(0)').show()
    }else{
        $('.error:eq(0)').hide()
    }
}

//shows error when field is empty (email)
function errorFuncEmail(){
    if ($('#emailid').val() == ""){
        $('.error:eq(1)').show()
    }else{
        $('.error:eq(1)').hide()
    }
}

// function errorFunc(){
//     if ($('#username').val() == ""){
//         $('.error:eq(0)').show()
//     }else{
//         $('.error:eq(0)').hide()
//     }

//     if ($('#emailid').val() == ""){
//         $('.error:eq(1)').show()
//     }else{
//         $('.error:eq(1)').hide()
//     }
// }