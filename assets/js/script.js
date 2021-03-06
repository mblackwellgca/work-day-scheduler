
// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// when the button is clicked, the text will be saved
$('.saveBtn').on('click', saveText);

// save user input
function saveText(){
    var time = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();

    localStorage.setItem(time, value);

}

// Color code time blocks for past, present, future
// First, we need to track the current time before defining past, present, future
function timeTracker(){
    //get current hour
    var timeNow = moment().hour();
    // loop timeblocks
    $(".time-block").each(function (){
        var timeBlock = parseInt($(this).attr('id').split('hour-')[1]);

    //check time and add class
    if (timeBlock < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");        
    }
    else if (timeBlock === timeNow) {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
    })
    
}


// brings the saved text back from local storage into the designated time-block row
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

timeTracker()
