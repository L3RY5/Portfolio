$(document).ready(function () {


    // Get the modal
    //var modal ;
    var btn;

    // Get the id of the klicked
    /*function btnId(buttom_Id) {
       var btn = document.getElementById(buttom_Id);
    }*/


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    /*btn.onClick=function () {
        function popup(klicked_Id) {
       var  modal = document.getElementById(klicked_Id);
       
        modal.style.display = "block";
        }
    }*/


    // When the user clicks anywhere outside of the modal, close it
    /*window.onClick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }

     }*/



    //----------------------------------------------------------//

    // var modal = document.getElementById('UserScr');
    var modal
    // Get the button that opens the modal
    //var btn = document.getElementById("UserScrBtn");
    var btn
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
     // When the user clicks on <span> (x), close the modal
     span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";

        }
    }

    if (btn = document.getElementById("UserScrBtn")) {
        modal = document.getElementById('UserScr');

        btn.onclick = function () {
            modal.style.display = "block";
        }
    }
    if (btn = document.getElementById("PingScrBtn")) {
        modal = document.getElementById('PingScr');

        btn.onclick = function () {
            modal.style.display = "block";
        }
    }
   


    /*
        switch (btn) {
            case btn == document.getElementById("UserScrBtn"):
                modal = document.getElementById('UserScr');
                var span = document.getElementsByClassName("close")[0];
                btn.onclick = function () {
                    modal.style.display = "block";
                }
                break;
            case btn == document.getElementById("PingScrBtn"):
                modal = document.getElementById('PingScr');
                var span = document.getElementsByClassName("close")[0];
                btn.onclick = function () {
                    modal.style.display = "block";
                }
                break;

            default:
                break;
        }*/




});