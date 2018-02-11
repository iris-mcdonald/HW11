//Javascript for HW11: Temperature Converter
console.info('reached top of my script');

$(document).ready(function () {
    $("#btnExit").click(function () {
        $("#page").fadeOut(2000);
        $("#goodbye").delay(1000).show(2000);
    });
});//End of click on Exit 

$(document).ready(function () {
    $('#tryAgain').click(function () {
        clearSelection();
    });
});//End of click on Try Again

$(document).ready(function () {
    $('#convert').click(function () {
        startProcess();
    });
});

    function clearSelection() {
        console.log("clearSelection reached");
        document.getElementById("celsius").checked = false;
        document.getElementById("fahrenheit").checked = false;
        document.getElementById("tempInput").value = "";
        console.log (document.getElementById("celsius").checked);
        console.log(document.getElementById("fahrenheit").checked);
        document.getElementById("outputTemp").innerHTML = " ";

        console.info("selection cleared");
    };

    function convertTempFtoC(tempNumeric) {//convert Farhenheit to Celsius
        var tempNumeric = (tempNumeric - 32) * (5 / 9);
        console.info("Convert F to C outputTemp: " + tempNumeric);
        return tempNumeric;
    };

    function convertTempCtoF(tempNumeric) {//convert Celsius to Farhenheit
        var tempNumeric = (tempNumeric * (9 / 5) + 32);
        console.info("Convert C to F outputTemp: " + tempNumeric);
        return tempNumeric;
    };

    function validateInput() {//need to add error processing
        try {
            var inputTemp = $('#tempInput').val();
            /*var temperature = document.getElementById("tempInput").value;*/

            tempNumeric = parseFloat(inputTemp);//parse string to identify numbers
            console.info("tempNumeric: " + tempNumeric);

            if (isNaN(tempNumeric) == true) {
                throw new Error('Invalid data type');
            } else {
                return tempNumeric;
            }//end of if

        }

        catch (excep) {
            console.warn("inputTemp not numeric" + except.name +
                "--" + excep.name);
        }//end try catch block

    };//end function validateInput

    function validateConversionType() {
        if ((document.getElementById("fahrenheit").checked == false) ||
            (document.getElementById("celsius").checked == false)) {
            console.warn("no temperature conversion type selected");
        };
    };//end function validateConversionType



    function startProcess() {
        console.info("entered startProcess()");

        try {
            validateConversionType()

            var temperature = validateInput();
            console.info("temperature after validateInput: " + temperature);

            if (document.getElementById("celsius").checked == true) {
                var newTemp = convertTempFtoC(temperature);
                console.info("before writing to page, F to C: " + newTemp);
            } else if
            (document.getElementById("fahrenheit").checked == true) {
                var newTemp = convertTempCtoF(temperature);
                console.info("before writing to page, C to F: " + newTemp);
            };//end if- add logic to send msg to select either celsius or fahrenheit


            document.getElementById("outputTemp").innerHTML = newTemp;
        }
        catch (excep) {
            console.warn("General Error has occurred" + except.name +
                "--" + excep.name);
        };//end of try catch block

    };//end of startProcess


    $(document).ready(function () {
        startProcess();

    });

    /*$(document).ready(function () {
        $("#tempInput").change(function () {
            console.info("The temperature has been changed, run startProcess");
            startProcess();
        })
    });*/


