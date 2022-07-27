$(document).ready(function () {


    //hides dropdown content
    $(".div_content").hide();

    //unhides first option content
    $("#option1").show();

    //listen to dropdown for change
    $("#selectT").change(function () {
        //rehide content on change
        $('.div_content').hide();
        //unhides current item
        $('#' + $(this).val()).show();
    });

});