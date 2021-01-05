let title = document.createElement('title');
title.innerHTML = 'home_8';
document.head.appendChild(title);

let meta1 = document.createElement('meta');
meta1.setAttribute('charset', 'UTF-8'); 
document.head.appendChild(meta1);

let meta2 = document.createElement('meta');
meta2.setAttribute('name', 'viewport');
meta2.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(meta2);

let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
    * {
        font-family: Monsterrat;
    }     
    .button-style1 {
        padding: 13px 30px;
        border-radius: 30px;
        text-transform: uppercase;
        background-color: #FFFFFF;
        border-color: #FFC80A;
        margin-top: 65px;
        font-weight: 700;
    }
    .button-style2 {
        padding: 13px 30px;
        border-radius: 30px;
        text-transform: uppercase;
        background-color: #8F75BE;
        border-color: #FFC80A;
        color: #FFFFFF;
        margin-top: 65px;
        font-weight: 700;
    }
    @font-face {
        font-family: Monsterrat;
        src: url(Monsterrat/Montserrat-Regular.ttf);
    }
`;

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);
h1.style.fontSize = '36px';
h1.style.textAlign = 'center';

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p1);
p1.setAttribute('style', "font-size: 14px; text-align: center; color: #9FA3A7; margin-bottom: 55px")

let divMainMain = document.createElement('div');
document.body.appendChild(divMainMain);
divMainMain.style.display = 'flex';

let divMain = document.createElement('div');
divMainMain.appendChild(divMain);
divMain.style.display = 'flex';
divMain.style.textAlign = 'center';
divMain.style.marginLeft = 'auto';
divMain.style.marginRight = 'auto';

let divLeft = document.createElement('div');
divMain.appendChild(divLeft);
divLeft.style.cssText = 'width: 400px; height: 480px; display: block; border: solid 1px; border-color: #E8E9ED';

let p2 = document.createElement('p');
p2.innerHTML = 'Freelancer';
divLeft.appendChild(p2);
p2.style.cssText = 'fontSize: 12px; color: #9FA3A7; margin-top: 83px; text-transform: uppercase';

let h2 = document.createElement('h1');
h2.innerHTML = 'Initially <br> designed to';
divLeft.appendChild(h2);
h2.style.fontSize = '36px';
h2.style.lineHeight = '46px';


let p3 = document.createElement('p');
p3.innerHTML = 'But I must explain to you how all this<br> mistaken idea of denouncing';
divLeft.appendChild(p3);
p3.style.fontSize = '12px';
p3.style.color = '#9FA3A7';
p3.style.lineHeight = '22px';

let button = document.createElement('button');
divLeft.appendChild(button);
button.innerHTML = 'start here';
button.classList.add('button-style1');

let divRight = document.createElement('div');
divMain.appendChild(divRight);
divRight.style.cssText = 'background-color: #8F75BE; display: block; width: 400px; height: 480px';

let p4 = document.createElement('p');
p4.innerHTML = 'Studio';
divRight.appendChild(p4);
p4.style.cssText = 'fontSize: 12px; color: #FFC80A; margin-top: 83px; text-transform: uppercase';

let h3 = document.createElement('h1');
h3.innerHTML = 'Initially<br> designed to';
divRight.appendChild(h3);
h3.style.fontSize = '36px';
h3.style.color = '#FFFFFF';
h3.style.lineHeight = '46px';

let p5 = document.createElement('p');
p5.innerHTML = 'But I must explain to you how all this<br> mistaken idea of denouncing';
divRight.appendChild(p5);
p5.style.fontSize = '12px';
p5.style.color = '#FFFFFF';
p5.style.lineHeight = '22px';

let button2 = document.createElement('button');
divRight.appendChild(button2);
button2.innerHTML = 'start here';
button2.classList.add('button-style2');
