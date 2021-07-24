//var displayCurrentdateEl = $('#currentDay');

//function displayDate() {
    
//var nowDay = moment().format('dddd');
//var currentDate = moment().format('MMM Do YYYY');

//console.log(nowDay + ' , ' + currentDate);
//displayCurrentdateEl.text(nowDay + ' , ' + currentDate);

//};

//displayDate()

$(document).ready(function () {

    $('#currentDay').text(moment().format('dddd, MMM Do YYYY'));


    $(".saveBtn").on("click", function () {
        console.log(this);
        var time = $(this).parent().attr("id");
        var info = $(this).siblings(".block").val();

        localStorage.setItem(time,info);
    })

    $("#hr8 .block").val(localStorage.getItem("hr8"));
    $("#hr9 .block").val(localStorage.getItem("hr9"));
    $("#hr10 .block").val(localStorage.getItem("hr10"));
    $("#hr11 .block").val(localStorage.getItem("hr11"));
    $("#hr12 .block").val(localStorage.getItem("hr12"));
    $("#hr13 .block").val(localStorage.getItem("hr13"));
    $("#hr14 .block").val(localStorage.getItem("hr14"));
    $("#hr15 .block").val(localStorage.getItem("hr15"));
    $("#hr16 .block").val(localStorage.getItem("hr16"));
    $("#hr17 .block").val(localStorage.getItem("hr17"));

    function hourTracker() {
        
        var currentHour = moment().hour(); 

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("time")[1]);
            console.log( blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); 
})












