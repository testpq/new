let card1 = document.querySelectorAll(".card-min-1");
let card2 = document.querySelectorAll(".card-min-2");
let card3 = document.querySelectorAll(".card-min-3");
let card4 = document.querySelectorAll(".card-min-4");

let titulo = document.querySelector(".card-min-4-titulo");
let descricao1 = document.querySelector(".desc1");
let descricao2 = document.querySelector(".desc2");
let descricao3 = document.querySelector(".desc3");
let descricao4 = document.querySelector(".desc4");

const cards = document.querySelectorAll('.card-min-1, .card-min-2, .card-min-3, .card-min-4');

cards.forEach(card => {
    card.addEventListener('click', () => {
        
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');

                const otherIcon = otherCard.querySelector('.bx-minus');
                if (otherIcon) {
                    otherIcon.classList.replace('bx-minus', 'bx-plus');
                }
            }
        });

        card.classList.toggle('active');

        const icon = card.querySelector('.bx-plus');
        if (icon) {
            icon.classList.replace('bx-plus', 'bx-minus');
        } else {
            const closedIcon = card.querySelector('.bx-minus');
            if (closedIcon) {
                closedIcon.classList.replace('bx-minus', 'bx-plus');
            }
        }
    });
});




// cards dogtag
let dogtag1 = document.getElementById("dogtag1");
let dogtag2 = document.getElementById("dogtag2");
let dogtag3 = document.getElementById("dogtag3");
let dogtag4 = document.getElementById("dogtag4");
let dogtag5 = document.getElementById("dogtag5");
let dogtag6 = document.getElementById("dogtag6");
let dogtag7 = document.getElementById("dogtag7");

// legendas cards dogtag
let legendaDogtag1 = document.querySelector(".legenda-container-7-card-1");
let legendaDogtag2 = document.querySelector(".legenda-container-7-card-2");
let legendaDogtag3 = document.querySelector(".legenda-container-7-card-3");
let legendaDogtag4 = document.querySelector(".legenda-container-7-card-4");
let legendaDogtag5 = document.querySelector(".legenda-container-7-card-5");
let legendaDogtag6 = document.querySelector(".legenda-container-7-card-6");
let legendaDogtag7 = document.querySelector(".legenda-container-7-card-7");


// img cards dogtag
let imgCard1 = document.querySelector(".img-container-7-card-1");
let imgCard2 = document.querySelector(".img-container-7-card-2");
let imgCard3 = document.querySelector(".img-container-7-card-3");
let imgCard4 = document.querySelector(".img-container-7-card-4");
let imgCard5 = document.querySelector(".img-container-7-card-5");
let imgCard6 = document.querySelector(".img-container-7-card-6");
let imgCard7 = document.querySelector(".img-container-7-card-7");


let teste = document.querySelector("container-7-card-1");

dogtag1.addEventListener("click", tag1);
dogtag2.addEventListener("click", tag2);
dogtag3.addEventListener("click", tag3);
dogtag4.addEventListener("click", tag4);
dogtag5.addEventListener("click", tag5);
dogtag6.addEventListener("click", tag6);
dogtag7.addEventListener("click", tag7);


function tag1() {
    legendaDogtag1.style.display = (legendaDogtag1.style.display === 'flex') ? 'none' : 'flex';
    imgCard1.style.display = (imgCard1.style.display === 'none') ? 'flex' : 'none';

    legendaDogtag2.style.display = 'none';
    legendaDogtag3.style.display = 'none';
    legendaDogtag4.style.display = 'none';
    legendaDogtag5.style.display = 'none';
    legendaDogtag6.style.display = 'none';
    legendaDogtag7.style.display = 'none';

    imgCard2.style.display = 'flex';
    imgCard3.style.display = 'flex';
    imgCard4.style.display = 'flex';
    imgCard5.style.display = 'flex';
    imgCard6.style.display = 'flex';
    imgCard7.style.display = 'flex';

}

function tag2() {
    legendaDogtag2.style.display = (legendaDogtag2.style.display === 'flex') ? 'none' : 'flex';
    imgCard2.style.display = (imgCard2.style.display === 'none') ? 'flex' : 'none';

    legendaDogtag1.style.display = 'none';
    legendaDogtag3.style.display = 'none';
    legendaDogtag4.style.display = 'none';
    legendaDogtag5.style.display = 'none';
    legendaDogtag6.style.display = 'none';
    legendaDogtag7.style.display = 'none';
    
    imgCard1.style.display = 'flex';
    imgCard3.style.display = 'flex';
    imgCard4.style.display = 'flex';
    imgCard5.style.display = 'flex';
    imgCard6.style.display = 'flex';
    imgCard7.style.display = 'flex';
}

function tag3() {
    legendaDogtag3.style.display = (legendaDogtag3.style.display === 'flex') ? 'none' : 'flex';
    imgCard3.style.display = (imgCard3.style.display === 'none') ? 'flex' : 'none';

    legendaDogtag1.style.display = 'none';
    legendaDogtag2.style.display = 'none';
    legendaDogtag4.style.display = 'none';
    legendaDogtag5.style.display = 'none';
    legendaDogtag6.style.display = 'none';
    legendaDogtag7.style.display = 'none';
    
    imgCard1.style.display = 'flex';
    imgCard2.style.display = 'flex';
    imgCard4.style.display = 'flex';
    imgCard5.style.display = 'flex';
    imgCard6.style.display = 'flex';
    imgCard7.style.display = 'flex';
}

function tag4() {
    legendaDogtag4.style.display = (legendaDogtag4.style.display === 'flex') ? 'none' : 'flex';
    imgCard4.style.display = (imgCard4.style.display === 'none') ? 'flex' : 'none';

    legendaDogtag1.style.display = 'none';
    legendaDogtag2.style.display = 'none';
    legendaDogtag3.style.display = 'none';
    legendaDogtag5.style.display = 'none';
    legendaDogtag6.style.display = 'none';
    legendaDogtag7.style.display = 'none';
    
    imgCard1.style.display = 'flex';
    imgCard2.style.display = 'flex';
    imgCard3.style.display = 'flex';
    imgCard5.style.display = 'flex';
    imgCard6.style.display = 'flex';
    imgCard7.style.display = 'flex';
}

function tag5() {
    legendaDogtag5.style.display = (legendaDogtag5.style.display === 'flex') ? 'none' : 'flex';
    imgCard5.style.display = (imgCard5.style.display === 'none') ? 'flex' : 'none';

    legendaDogtag1.style.display = 'none';
    legendaDogtag2.style.display = 'none';
    legendaDogtag3.style.display = 'none';
    legendaDogtag4.style.display = 'none';
    legendaDogtag6.style.display = 'none';
    legendaDogtag7.style.display = 'none';
    
    imgCard1.style.display = 'flex';
    imgCard2.style.display = 'flex';
    imgCard3.style.display = 'flex';
    imgCard4.style.display = 'flex';
    imgCard6.style.display = 'flex';
    imgCard7.style.display = 'flex';
}

function tag6() {
    legendaDogtag6.style.display = (legendaDogtag6.style.display === 'flex') ? 'none' : 'flex';
    imgCard6.style.display = (imgCard6.style.display === 'none') ? 'flex' : 'none';

    legendaDogtag1.style.display = 'none';
    legendaDogtag2.style.display = 'none';
    legendaDogtag3.style.display = 'none';
    legendaDogtag4.style.display = 'none';
    legendaDogtag5.style.display = 'none';
    legendaDogtag7.style.display = 'none';
    
    imgCard1.style.display = 'flex';
    imgCard2.style.display = 'flex';
    imgCard3.style.display = 'flex';
    imgCard4.style.display = 'flex';
    imgCard5.style.display = 'flex';
    imgCard7.style.display = 'flex';
}

function tag7() {
    legendaDogtag7.style.display = (legendaDogtag7.style.display === 'flex') ? 'none' : 'flex';
    imgCard7.style.display = (imgCard7.style.display === 'none') ? 'flex' : 'none';

    legendaDogtag1.style.display = 'none';
    legendaDogtag2.style.display = 'none';
    legendaDogtag3.style.display = 'none';
    legendaDogtag4.style.display = 'none';
    legendaDogtag5.style.display = 'none';
    legendaDogtag6.style.display = 'none';
    
    imgCard1.style.display = 'flex';
    imgCard2.style.display = 'flex';
    imgCard3.style.display = 'flex';
    imgCard4.style.display = 'flex';
    imgCard5.style.display = 'flex';
    imgCard6.style.display = 'flex';
}
