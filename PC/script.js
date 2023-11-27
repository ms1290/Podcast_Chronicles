function login(event) {
    event.preventDefault();

    // For a real application, you would perform authentication here.
    // For simplicity, let's just log the input values.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

    // You can redirect the user to another page or perform other actions after login.
    // For now, let's just reload the page.
    location.reload();
}
