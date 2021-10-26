console.log('reg')
const URL = 'http://localhost:3000/users';

const formEl = document.getElementById('login-form')

formEl.addEventListener('submit', async(e)=>{
    e.preventDefault();
    console.log('sending');
    const formData = new FormData(formEl);
    console.log('formData', Object.fromEntries(formData));
    const resp = await fetch(`${URL}/login`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    });
    const dataBack = await resp.json();
    console.log('dataBack', dataBack);
    if(dataBack.msg === 'success'){
        const {email, token} = dataBack.data;
        localStorage.setItem('email', email)
        localStorage.setItem('token', token);

        window.location.href ='groupsPage.html'
    }
});
