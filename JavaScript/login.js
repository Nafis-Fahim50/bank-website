// step 1: add click event on the submit button 
document.getElementById('btn-submit').addEventListener('click',function(){
    
    // step 2:  get email value 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step 3: get password value 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step 4: varify email and password
    if(email === 'nafis@gmail.com' && password === 'fahim'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Incorrect username/password')
    }
    
})