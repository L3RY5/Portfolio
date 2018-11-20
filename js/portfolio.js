$(document).ready(function () {

    /*scrool animatie , scrol vertragen*/
    $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
    });
    /*scrool animatie , scrol vertragen*/



/**form falidatie bij het submiten */

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
                        if ($.trim($('#phone').val()) > 12) {
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

        /**einde formvalidatie bij subitten */






    })




});