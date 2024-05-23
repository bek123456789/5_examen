
// let user_inp = document.querySelector('.user_inp')
// let email_inp = document.querySelector('.emil_inp')
// let btn = document.querySelector('.btn_1')







    let user_inp = document.querySelector('.user_inp');
    let email_inp = document.querySelector('.emil_inp'); // Corrected 'emil_inp' to 'email_inp'
    let btn = document.querySelector('.btn_1');
    
    let API = 'https://jsonplaceholder.typicode.com/users';
    
    btn.addEventListener('click', () => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                data.map((v) => {
                    if (v.username === user_inp.value && v.email === email_inp.value) {
                        window.location.href = 'https://space.marsit.uz/main';
                    }
                });
            });
    });




