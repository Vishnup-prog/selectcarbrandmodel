

// call this function to get model name depends on chnage of brand dropdown
function callModelName() {
    $('#result').html("");
    $('#txterrormsg').html("");
    var getvaluee = document.getElementById("brand");
    var sendbrandname = getvaluee.options[getvaluee.selectedIndex].text;
    if (sendbrandname != "-- Select Brand --") {   // check if brand has value 
        $(".modelname").prop("disabled", false);
        $('.selectitem').css("border-color", "grey");
        $.ajax({ // send to ajax call to get brand list
            type: 'GET',
            url: '/Home/callModel',
            data: { sendbrandname: sendbrandname },
            contentType: "application/json; charset=utf-8",
            traditional: true,
            async: true,
            success: function (data) {
                if (data.success == true) {
                    $('.modellist').empty();
                    //build dropdown for model list depends on brand
                    $('.modellist').append('<select id="modellist" name="modelname" class="form-control selectitem modelname" onchange="sendModalname()"><option value="Select Model">-- Select Model --</option></select>');

                    for (var i = 0; i < data.modelList.length; i++) {
                        $('.modelname').append('<option value=' + data.modelList[i] + '>' + data.modelList[i] + '</option>');
                    }
                }
                else {
                    // if brand is selected in correct, have to display this error message
                    $('#txterrormsg').html("Please Select Correct Brand Name");
                }

            }
        });
    }
    else {
        // if brand has no value, have to display this message to select the brand name
        $(".modelname").prop("disabled", true);
        $('.modelname').find('option').not(':first').remove();
        $('#txterrormsg').html("Please Select Brand Name");
        $('#brand').css("border-color", "red");
        $('.modelname').css("border-color", "grey");
    }
}

// call this function, when model change depends on brand, and to display as result of selection
function sendModalname() {

    $('#result').html("");
    $('#txterrormsg').html("");
    $('.selectitem').css("border-color", "grey");
    var getbrand = document.getElementById("brand");
    var sendbrandname = getbrand.options[getbrand.selectedIndex].text;

    var getmodal = document.getElementById("modellist");
    var sendmodelname = getmodal.options[getmodal.selectedIndex].text;

    if (sendbrandname == "-- Select Brand --") {
        $('#txterrormsg').html("Please Select Brand Name");
        $('#brand').css("border-color", "red");
    }
    else if (sendmodelname == "-- Select Model --") {
        $('#txterrormsg').html("Please Select Model Name");
        $('.modelname').css("border-color", "red");
    }
    else if (sendmodelname == "-- Select Model --" && sendbrandname == "-- Select Brand --") {
        $('#txterrormsg').html("Please Select Brand and Model Name");
        $('.selectitem').css("border-color", "red");
    }
    else {
        $('.selectitem').css("border-color", "grey");
        $('#result').html(sendbrandname + " - " + sendmodelname);  // result is display of selection
    }


}

// call this function to check whether brand has correct value or not 
function checkbrand() {
    $('#txterrormsg').html("");
    var getbrand = document.getElementById("brand");
    var sendbrandname = getbrand.options[getbrand.selectedIndex].text;

    if (sendbrandname == "-- Select Brand --") {
        $('#txterrormsg').html("Please Select Brand Name");

    }
    else {
        $('#txterrormsg').html("");
    }
}