// JS portion. Tonglu Ji
// Problem 1
window.addEventListener('load', function() {
    add_one_third();
    document.getElementsByTagName('figcaption')[0].tabIndex = "0";
});

function add_one_third() {
    var oneThird = document.getElementsByTagName('figure');
    var i;
    for (i = 0; i < oneThird.length; i++) {
        oneThird[i].className += " one-third";
    }
};

// Problem 2
document.getElementsByTagName('footer')[0].addEventListener('click', removeFooter);

function removeFooter() {
    document.getElementsByTagName('footer')[0].remove();
};

// Problem 3
document.querySelector('.container :nth-child(5)').addEventListener('dblclick', removeFigure);

function removeFigure() {
    document.querySelector('.container :nth-child(5)').style.opacity = 0;

};

// Problem 4
const originalFont = document.getElementsByTagName('figcaption')[0].style.fontFamily;
document.querySelector('.container :nth-child(1)>figcaption').addEventListener('mouseover', changeFont);
document.querySelector('.container :nth-child(1)>figcaption').addEventListener('mouseout', restoreFont);

function changeFont() {
    document.getElementsByTagName('figcaption')[0].style.fontFamily = 'Cursive';
}

function restoreFont() {
    document.getElementsByTagName('figcaption')[0].style.fontFamily = originalFont;
}

// Problem 5
document.querySelector('.container :nth-child(1)>figcaption').addEventListener('focusin', changeFont);
document.querySelector('.container :nth-child(1)>figcaption').addEventListener('focusout', restoreFont);