console.log('reg')
const URL = 'http://localhost:3000/users';

const formEl = document.getElementById('register-form')
const errorDiv = document.querySelector('.errorDiv')


formEl.addEventListener('submit', async(e)=>{
e.preventDefault();
    console.log('sending');
    const formData = new FormData(formEl);
    console.log('formData', Object.fromEntries(formData));
    const resp = await fetch(`${URL}/register`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    });
    const dataBack = await resp.json();
    console.log('dataBack', dataBack);
    errorDiv.innerHTML = '';
    errorDiv.innerHTML += '*'+dataBack.error[0].errorMsg




});
