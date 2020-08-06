document.addEventListener('DOMContentLoaded', () => {
    const massaBtn = document.querySelector('.massa-btn'),
        animBtn = document.querySelector('.btn-anim'),
        welcomePage = document.querySelector('.welcome-page'),
        main = document.querySelector('main');

    massaBtn.addEventListener('click', (e) => {
        setTimeout(() => welcomePage.style.opacity = 0, 300);
        setTimeout(() => {
            welcomePage.style.display = 'none';
            main.style.display = 'block';
            setTimeout(() => {
                main.style.opacity = 1;
            }, 300)
        }, 600)
    })
    
    const submitBtn = document.querySelector('#submit-btn'),
          resWindow = document.querySelector('.res-window'),
          befRess = document.querySelectorAll('.befRes'),
          ress = document.querySelectorAll('.res');

    submitBtn.addEventListener('click', () => {
        resWindow.classList.toggle('res-window-on');
        document.querySelector('.res-window .container').classList.toggle('res-cont-on');
        main.style.filter = 'blur(15px)';

        ress.forEach((item, index) => {
            item.innerHTML += befRess[index].value;
        })

        document.querySelector('#metal-res').innerHTML += document.querySelector('select[name="metals"]').value;
    })

    const resBackBtn = document.querySelector('.res-back-btn'),
          resValues = ['Сечение : ', 'Размер : ', 'Ширина : ', 'Толщина : ', 'Металл : ']

    resBackBtn.addEventListener('click', () => {
        resWindow.classList.toggle('res-window-on');
        document.querySelector('.res-window .container').classList.toggle('res-cont-on');
        main.style.filter = 'blur(0px)';

        ress.forEach((item, index) => {
            item.innerHTML = resValues[index];
        })

        document.querySelector('#metal-res').innerHTML = resValues[4];

        
    })
    let counting = () => {
        let massa = document.querySelector('#massa');
        cost.innerHTML = `Цена : ${(Math.PI * document.querySelector('.thickness input.value') * document.querySelector('.width input.value') * (document.querySelector('.size input.value') + document.querySelector('.thickness input.value'))) / 1000 * }`
    }
})