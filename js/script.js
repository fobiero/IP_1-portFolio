function getValues() {
    const username = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    const result = (`my name is ${username}, of email ${email} & this is my project ${description}`)
    alert(result);
}