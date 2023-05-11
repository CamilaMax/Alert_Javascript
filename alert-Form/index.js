
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('password-two');

form.addEventListener('submit', (e) =>{
    e.preventDefault() //cancela comportamento padrão dos broswers

    checkInputs()
});

function checkInputs() {

    // função trim() tira espaços brancos na frente e atras.

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
        //mostrar error
        // adicionar a class error

        errorValidation( username, ' Preencha esse campo')
    }else {
        // adicionar a class de sucesso
        setSuccessFor( username)
    }

    if(usernameValue === '') {
        //mostrar error
        // adicionar a class error

        errorValidation( email, ' Preencha esse campo')
    }else {
        // adicionar a class de sucesso
        setSuccessFor( email)
    }

    if(usernameValue === '') {
        //mostrar error
        // adicionar a class error

        errorValidation( password , ' Preencha esse campo')
    }else {
        // adicionar a class de sucesso
        setSuccessFor( password )
    }

    if(usernameValue === '') {
        //mostrar error
        // adicionar a class error

        errorValidation( passwordtwo , ' Preencha esse campo')
    }else {
        // adicionar a class de sucesso
        setSuccessFor(passwordtwo)
    }


    
}




function errorValidation(input, message){
    // parentElement retorna um elemento direto do seu pai
    // que neste caso é o input todo do formControl onde esta o username.

    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

   formControl.className = 'form-control error'

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    

    formControl.className = 'form-control success'
}
