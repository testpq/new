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


let dogtag1 = document.getElementById("dogtag1");
let dogtag2 = document.getElementById("dogtag2");
let dogtag3 = document.getElementById("dogtag3");
let dogtag4 = document.getElementById("dogtag4");
let dogtag5 = document.getElementById("dogtag5");
let dogtag6 = document.getElementById("dogtag6");
let dogtag7 = document.getElementById("dogtag7");

let legendaDogtag1 = document.querySelector(".legenda-container-7-card-1");
let legendaDogtag2 = document.querySelector(".legenda-container-7-card-2");
let legendaDogtag3 = document.querySelector(".legenda-container-7-card-3");
let legendaDogtag4 = document.querySelector(".legenda-container-7-card-4");
let legendaDogtag5 = document.querySelector(".legenda-container-7-card-5");
let legendaDogtag6 = document.querySelector(".legenda-container-7-card-6");
let legendaDogtag7 = document.querySelector(".legenda-container-7-card-7");

let imgCard1 = document.querySelector(".img-container-7-card-1");
let imgCard2 = document.querySelector(".img-container-7-card-2");
let imgCard3 = document.querySelector(".img-container-7-card-3");
let imgCard4 = document.querySelector(".img-container-7-card-4");
let imgCard5 = document.querySelector(".img-container-7-card-5");
let imgCard6 = document.querySelector(".img-container-7-card-6");
let imgCard7 = document.querySelector(".img-container-7-card-7");

dogtag1.addEventListener("click", tag1);
dogtag2.addEventListener("click", tag2);
dogtag3.addEventListener("click", tag3);
dogtag4.addEventListener("click", tag4);
dogtag5.addEventListener("click", tag5);
dogtag6.addEventListener("click", tag6);
dogtag7.addEventListener("click", tag7);


function rotateOnCondition(legenda, img) {
    const shouldRotate = legenda.style.display === 'flex' && img.style.display === 'none';

    if (shouldRotate) {
        dogtag1.classList.add('rotate-on-condition');
    } else {
        dogtag1.classList.remove('rotate-on-condition');
    }
}


function toggleTag(tag, imgCard, legendaDogtag) {
    const isTagOpen = tag.classList.contains('transition-tag-show');

    resetTags();

    if (!isTagOpen) {
        tag.classList.add('transition-tag-show');
        imgCard.classList.add('img-show');
        legendaDogtag.classList.add('transition-legenda-show');
        rotateOnCondition(legendaDogtag, tag);
        legendaDogtag.classList.add('invert-text');
        tag.querySelector('.titulo-container-7-card').classList.add('invert-text');
    }
}

function resetTags() {
    const allTags = [dogtag1, dogtag2, dogtag3, dogtag4, dogtag5, dogtag6, dogtag7];
    
    allTags.forEach((tag) => {
        tag.classList.remove('transition-tag-show', 'transition-tag-hide');
        tag.querySelector('.img-container-7-card').classList.remove('img-show', 'img-hide');
        tag.querySelector('.legenda-container-7-card').classList.remove('transition-legenda-show', 'invert-text');
        tag.querySelector('.titulo-container-7-card').classList.remove('invert-text');
    });
}

function tag1() {
    toggleTag(dogtag1, imgCard1, legendaDogtag1);
}
function tag2() {
    toggleTag(dogtag2, imgCard2, legendaDogtag2);
}
function tag3() {
    toggleTag(dogtag3, imgCard3, legendaDogtag3);
}
function tag4() {
    toggleTag(dogtag4, imgCard4, legendaDogtag4);
}
function tag5() {
    toggleTag(dogtag5, imgCard5, legendaDogtag5);
}
function tag6() {
    toggleTag(dogtag6, imgCard6, legendaDogtag6);
}
function tag7() {
    toggleTag(dogtag7, imgCard7, legendaDogtag7);
}



