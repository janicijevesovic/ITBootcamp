let startCount = document.getElementById('startCount');
let inputCount = document.getElementById('inputCount');
let stopCount = document.getElementById('stopCount');
let count = 0;
let countPeriod = null;

startCount.addEventListener('click', () => {
    if (countPeriod === null) {
        countPeriod = setInterval(() => {
            count += 1;
            inputCount.value = count;
        }, 1000);
    }
});

stopCount.addEventListener('click', () => {
    clearInterval(countPeriod);
    countPeriod = null;
    // count = 0;
})