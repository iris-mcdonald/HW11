// JavaScript source code HW11
console.info('reached top of my script');

$(document).ready(function () {
    $('#tryAgain').click(function () { 
        //clear out values?
        startProcess();
    })
});
$(document).ready(function () {
    $("#tempInput").input(function () {
        alert("The temperature has been input, run startProcess");
        startProcess();
    })
});
$(document).ready(function () {
    $("#tempInput").change(function () {
        alert("The temperature has been changed, run startProcess");
        startProcess();
    })
});

/*document.getElementById("myInput").oninput = function () { myFunction() };js for input event listener*/
/*//need code when user clicks a different radio button- but put in script!!!
<select id="mySelect" onchange="myFunction()">
    <option value="Audi">Audi
  <option value="BMW">BMW
  <option value="Mercedes">Mercedes
  <option value="Volvo">Volvo
</select>
*/

//need code when user starts keying in a temperature

function convertTempFtoC(tempNumeric) {//convert Farhenheit to Celsius
    var tempNumeric = (tempNumeric - 32) * (5 / 9);
    alert("Convert F to C outputTemp: " + tempNumeric);
    return tempNumeric;
}

function convertTempCtoF(tempNumeric) {//convert Celsius to Farhenheit
    var tempNumeric = (tempNumeric * (9 / 5) + 32);
    alert("Convert C to F outputTemp: " + tempNumeric);
    return tempNumeric;
}

function validateInput() {//need to add error processing
    var inputTemp = $('#tempInput').val();
    /*var temperature = document.getElementById("tempInput").value;*/

    tempNumeric = parseFloat(inputTemp);//parse string to identify numbers
    alert("tempNumeric: " + tempNumeric);

    if (tempNumeric == NaN) {
        tempNumeric == 50;
        alert("tempNumeric NaN; defaulted to 50");//just default value until add exception logic here
    }
    return tempNumeric;
}


function startProcess() {
    alert("entered startProcess()");
    var temperature = validateInput();
    alert("temperature after validateInput: " + temperature);

    if (document.getElementById("celsius").checked == true) {
        var newTemp = convertTempFtoC(temperature);
        alert("before writing to page, F to C: " + newTemp);
    } else {
        var newTemp = convertTempCtoF(temperature);
        alert("before writing to page, C to F: " + newTemp);
    };
 
    
    document.getElementById("outputTemp").innerHTML = newTemp;

}//end of startProcess


$(document).ready(function () {
    startProcess();
   
});


