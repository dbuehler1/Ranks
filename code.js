$(document).ready(
    function(){
        $("#Submit").click(greet)



        function greet(){
            event.preventDefault()

            var rank = $("input[name=Rank]:checked").data("rank");
            var color = $("input[name=Rank]:checked").data("color");
            var firstName = $("#firstname").val();
            var lastName = $("#lastname").val();



            $("#greeting").text("Hello, " + rank + " " + firstName + " " + lastName + "!");
            $("#greeting").css("color", color)
        }



    }
);
