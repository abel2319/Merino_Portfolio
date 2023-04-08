const themeBtn = document.querySelector('.dark-mode');

    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('dark-mode');
    })