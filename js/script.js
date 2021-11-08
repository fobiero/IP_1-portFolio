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