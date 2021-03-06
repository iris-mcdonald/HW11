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

    function UserException(message) {
         this.message = message;
         this.name = 'UserException';
    }

    function clearSelection() {
        try {
            console.log("clearSelection reached");

            document.getElementById("celsius").checked = false;
            document.getElementById("fahrenheit").checked = false;
            document.getElementById("tempInput").value = "";
            console.log(document.getElementById("celsius").checked);
            console.log(document.getElementById("fahrenheit").checked);
            document.getElementById("outputTemp").innerHTML = " ";
            document.getElementById("errormsg").innerHTML = " ";
            $("#convert").removeClass();
            $("#convert").addClass("btn btn-lg");

            console.info("selection cleared");
        } catch (e) {
            throw e;
        };
    }//end of clearSelection

    function convertTempFtoC(tempNumeric) {//convert Farhenheit to Celsius
        try {
            var tempNumeric = (tempNumeric - 32) * (5 / 9);
            if (isNaN(tempNumeric) == true) {
                throw new UserException('InvalidDataOnFtoC');
            } else {
                return tempNumeric;
            }
        }
        catch(e) {
            throw e;
        };

    }//end of convertTempFtoC(tempNumeric)

    function convertTempCtoF(tempNumeric) {//convert Celsius to Farhenheit
        try {
            var tempNumeric = (tempNumeric * (9 / 5) + 32);
            if (isNaN(tempNumeric) == true) {
                throw new UserException('InvalidDataOnCtoF');
            } else {
                return tempNumeric;
            }

        } catch (e) {
            throw e;
        };
    }//end of converTempCtoF

    function validateInput() {
        try {
            var inputTemp = $('#tempInput').val();
            /*var temperature = document.getElementById("tempInput").value;*/

            tempNumeric = parseFloat(inputTemp);//parse string to identify numbers
            console.info("tempNumeric: " + tempNumeric);

            if (isNaN(tempNumeric) == true) {
                throw new UserException('InvalidTemp');
            } else {
                return tempNumeric;
            }//end of if

        } catch(e) {
                throw e;
            };

     }//end function validateInput

    function validateConversionType() {
        try {
            if ((document.getElementById("fahrenheit").checked == false) &&
                (document.getElementById("celsius").checked == false)) {
                throw new UserException('NoTempTypeSelected');
            }
        } catch (e) {
            throw e    ;
        }

    }//end function validateConversionType

    function startProcess() {
        console.info("entered startProcess()");

        try {
            document.getElementById("errormsg").innerHTML = " ";
            document.getElementById("outputTemp").innerHTML = " ";

            validateConversionType();

            var temperature = validateInput();
            
            if (document.getElementById("celsius").checked == true) {
                var newTemp = convertTempFtoC(temperature);
            } else if
               (document.getElementById("fahrenheit").checked == true) {
                    var newTemp = convertTempCtoF(temperature);
            }//end if

            document.getElementById("outputTemp").innerHTML = newTemp;
            $("#convert").removeClass();
            $("#convert").addClass("btn btn-large btn-success")
            
        }
        catch(e) {
            document.getElementById("errormsg").innerHTML =
                "Invalid data entered";
            console.warn(e.message, e.name);
            $("#convert").removeClass();
            $("#convert").addClass("btn btn-large btn-warning");                     
        };//end of try catch block

    };//end of startProcess


