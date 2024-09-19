'use strict';

//1
document.querySelector('.btn-click').addEventListener('click', function(){
    this.textContent = 'Нажато';
});

document.querySelector('.btn-hover').addEventListener('mouseenter', function(){
    this.textContent = 'Наведено';
    this.classList.add('hover');
});
document.querySelector('.btn-hover').addEventListener('mouseleave', function(){
    this.textContent = 'Наведите';
    this.classList.remove('hover');
});

document.querySelector('.btn-focus').addEventListener('focus', function(){
    this.textContent = 'Сфокусировано';
});
document.querySelector('.btn-focus').addEventListener('blur', function(){
    this.textContent = 'Сфокусируйте';
});

document.querySelector('.btn-active').addEventListener('mousedown', function(){
    this.textContent = 'Зажато';
});
document.querySelector('.btn-active').addEventListener('mouseup', function(){
    this.textContent = 'Зажмите';
});


//2
document.addEventListener('keydown', (еvent)=>{
    switch (еvent.code){
        case 'KeyR':
            document.body.style.backgroundColor = 'red';
            break;
        case 'KeyG':
            document.body.style.backgroundColor = 'green';
            break;
        case 'KeyB':
            document.body.style.backgroundColor = 'blue';
            break;
    }
});
document.addEventListener('keyup', (event)=>{
    switch(event.code){
        case 'KeyR':
            document.body.style.backgroundColor = 'white';
            break;
        case 'KeyG':
            document.body.style.backgroundColor = 'white';
            break;
        case 'KeyB':
            document.body.style.backgroundColor = 'white';
            break;
    }
});



//3
let block = document.getElementById('block');


document.addEventListener('keydown', (event)=>{
    let topPosition = parseInt(block.style.top) || 0;
    let leftPosition = parseInt(block.style.left) || 0;
    switch(event.code){
        case 'KeyW':
            block.style.top = `${topPosition - 1}px`;
            break;
        case 'KeyD':
            block.style.left = `${leftPosition + 1}px`;
            break;
        case 'KeyS':
            block.style.top = `${topPosition + 1}px`;
            break;
        case 'KeyA':
            block.style.left = `${leftPosition - 1}px`;
            break;
    }
});