// Необхідно реалізувати наступний функціонал як на відео, а саме:
// •	повернути поточну дату в форматі: день.місяць.рік
// •	повернути поточний час в форматі: година:хвилина:секунда
// •	розробити секундомір в якого є можливість запуску, паузи,
//      запам’ятовування поточного часу та скидування часу(мілісекунди не
//      обов’язково реалізовувати)
// •	розробити таймер в якого є можливість визначення часового проміжку,
//      а також запуск, пауза ти скидування часу


// setTimeout((...args) => {
//     console.log(args)
// }, 3000, 'arg1', 'arg2', 'arg3')
// const div = document.querySelector('.dataBox');
// const  interval = setInterval(function () {1
//     const newElement =  document.createElement('section');
//     newElement.innerHTML = `Element<b>from ...</b>`;
//     div.insertAdjacentElement('beforeend', newElement)
//
//     if (div.children.length === 5) {
//         clearInterval(interval)
//     }
// }, 2000)
const clockBox = document.querySelector('.clock')
const dateBox = document.querySelector('.date')

setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const mouns = date.getMonth();
    const year = date.getFullYear()
    const clock = hours + ':' + minutes + ':' + seconds;
    clockBox.innerHTML = clock;
    const dateF = day + '.' + '.' + mouns + '.' +year;
    // dateBox.insertAdjacentElement('beforebegin', dateF);
}, 1000);

// ------------------------------------------------------------------

const watch = document.querySelector('.time');
let miliseconds = 0;
let timer;

const startWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(() => {
        miliseconds += 10;
        let dateTimer = new Date(miliseconds);
        watch.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    },10)
}

const pauseWatch = () => {
    watch.classList.add('paused');
    clearInterval(timer);
};

const resetWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    miliseconds = 0;
    watch.innerHTML = '00:00:00:00'
};

document.addEventListener('click', (e) => {
    const element = e.target;
    if(element.id === 'Start') startWatch();
    if(element.id === 'Pause') pauseWatch();
    if(element.id === 'Reset') resetWatch();
});
