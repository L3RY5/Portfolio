$(document).ready(function () {
    var cssError={
        "border": "red solid 2px",
        "background-color":"gray",
        "color":"white"
    };
    $("#submit").on("click", function () {

        if ($.trim($('#first-name').val()) == '') {
            /*$('#first-name').addClass("leeg");*/
            alert("Voornaam is leeg");
            
           
            
        }else if ($.trim($('#last-name').val()) == '') {
            alert("Achternaam is leeg");
        }else if ($.trim($('#email').val()) == '') {
            alert("Email is leeg");
        }else if ($.trim($('#phone').val()) == '') {
            alert("Telepoon nr is leeg");
        }
       
        if ($('#first-name').val().match(/[^a-zA-Z]/g)) {
            while ($('#first-name').val().match(/[^a-zA-Z]/g)) {
                $("#first-name").css(cssError);
                $("#first-name").attr("placeholder", "Deze veld kan alleen letters bevatten");
            }
        }



    })




});