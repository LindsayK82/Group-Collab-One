// put before api links https://russelldev-cors-anywhere.herokuapp.com/
const aries = document.querySelector('b1');
const taurus = document.querySelector('b2');
const gemini = document.querySelector('b3');
const cancer = document.querySelector('b4');
const leo = document.querySelector('b5');
const virgo = document.querySelector('b6');
const libra = document.querySelector('b7');
const scorpio = document.querySelector('b8');
const sagittarius = document.querySelector('b9');
const capricorn = document.querySelector('b10');
const aquarius = document.querySelector('.b11');
const pisces = document.querySelector('b12');

const body = document.querySelector('body');
const Aq = document.createElement('h1');


const signAq = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=aquarius&type=daily&day=today`)
    .then(response => response.json())
    
    .then(data => {
       Aq.textContent = data[0];
       body.appendChild(Aq);
       
    })

}

aquarius.addEventListener('click' , function () {signAq()})

