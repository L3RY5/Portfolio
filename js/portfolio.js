$(document).ready(function () {
    /*var cssError={
        "border": "red solid 2px",
        "background-color":"gray",
        "color":"white"
    };*/

    $("#submit").on("click", function () {
        ///kijk of de voornaam niet leeg is
        if (!$.trim($('#first-name').val()) == '') {
            /*$('#first-name').addClass("leeg");*/
            //als de voornaamm niet leeg is kijk je oh het alleen letter zijn
            if ($('#first-name').val().match(/[^a-zA-Z]/g)) {
                //$('#first-name').addClass("leeg");
                alert("Dit Mag alleen en letter zijn");
            }


            //na dat je gekeken heb of geen leter en leeg is kijk je of deze veld  niet leeg is
            if (!$.trim($('#last-name').val()) == '') {
                if ($('#last-name').val().match(/[^a-zA-Z]/g)) {
                    //$('#first-name').addClass("leeg");
                    alert("Dit Mag alleen en letter zijn");
                }

                //als de last name niet leeg is  of letters bevatten kijken naar email
                if (!$.trim($('#email').val()) == '') {
                    //kijk hij geen @ bevat
                    if ($('#email:contains("@")')) {

                    } else {
                        alert("Email moet @ bevatten");
                    }
                    //kijk of tel leeg is
                    if (!$.trim($('#phone').val()) == '') {
                        if ($.trim($('#phone').val()) >12){
                            alert("Telepoon nr is te lang 0032.. max 12 numbers");
                        }
                    } else {
                        alert("Telepoon nr is leeg");
                    }
                } else {
                    alert("Email is leeg");
                }

            } else {
                alert("Achternaam is leeg");
            }


        } else {
            alert("Voornaam is leeg");
        }






    })




});