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
const horoSignData = document.createElement('h1');
var dailyhoro = document.createElement('p')
horoSignData.style.backgroundColor = 'silver';
dailyhoro.style.backgroundColor = 'silver';



const signAr = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=aries&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b1').forEach(item => {
    item.addEventListener('click', function () { signAr() })
})

const signTa = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=taurus&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b2').forEach(item => {
    item.addEventListener('click', function () { signTa() })
})

const signGe = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=gemini&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b3').forEach(item => {
    item.addEventListener('click', function () { signGe() })
})

const signCa = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=cancer&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b4').forEach(item => {
    item.addEventListener('click', function () { signCa() })
})

const signLeo = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=leo&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b5').forEach(item => {
    item.addEventListener('click', function () { signLeo() })
})

const signVi = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=Virgo&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b6').forEach(item => {
    item.addEventListener('click', function () { signVi() })
})

const signLi = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=libra&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b7').forEach(item => {
    item.addEventListener('click', function () { signLi() })
})

const signSc = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=scorpio&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b8').forEach(item => {
    item.addEventListener('click', function () { signSc() })
})

const signSa = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=sagittarius&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b9').forEach(item => {
    item.addEventListener('click', function () { signSa() })
})

const signCap = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=capricorn&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b10').forEach(item => {
    item.addEventListener('click', function () { signCap() })
})

const signAq = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=aquarius&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b11').forEach(item => {
    item.addEventListener('click', function () { signAq() })
})

const signPi = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=pisces&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('.b12').forEach(item => {
    item.addEventListener('click', function () { signPi() })
})
