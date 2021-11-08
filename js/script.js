// fixed navbar onScroll 
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 350) {
            document.getElementById('navbar-top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar-top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});


function getValues() {
    // get values from suer 
    // const users = []
    const username = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    const result = (`my name is ${username}, of email ${email} & this is my project ${description}`)

    // check for empty values 
    if (!username == '' && !email == '' && !description == '') {
        alert(result)
    } else {
        alert('Please fill all fields!');
    }

    // store then in localStorage 

}