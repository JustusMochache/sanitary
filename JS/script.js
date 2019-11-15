$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);

$(document).ready(function() {

    $('#sub').click(function(event) {

        var name = $('#name1').val();
        var emailAddress = $('#name1').val();
        var phoneNumber = $('#name1').val();
        var passWord = $('#name1').val();
        var comment = $('#comment');
        var key = '43ab10333d46e19325f96d210ed40c49-us5';
        if (name == '' || emailAddress == '' || phoneNumber == '' || passWord == '' || comment == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi, ' + ' We have received your message. Thank you for reaching out to us.');
        }

        event.preventDefault();


    });
})