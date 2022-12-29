const vn = document.getElementById('vn');
const playbtn = document.getElementById('box-img');
const after = document.getElementById('after');
const before = document.getElementById('before');
const notif = document.getElementById('notif');
const info = document.getElementById('info');
const ulimg1 = document.getElementById('ul-img1');
const ulimg2 = document.getElementById('ul-img2');
const wrapper = document.getElementById('wrapper');
const box = document.getElementById('box');
const boxleft = document.getElementById('box-left')
const boxleft2 = document.getElementById('box-left-2')
const boxleft3 = document.getElementById('box-left-3')
const seephoto = document.getElementById('see-photos')
const btn = document.getElementById('button')
const password = document.getElementById('password')
const form = document.getElementById('form-photo')
const ps = document.getElementById('ps')

var passwordphoto = 'nazwasalsabila';

password.addEventListener('click', function(){
    ps.classList.remove('wrong')
})

function passcheck(){
    if(document.getElementById('password').value != passwordphoto){
        ps.classList.add('wrong')
    }
    
    if(document.getElementById('password').value == passwordphoto){
        boxleft3.style.display = 'none'
        boxleft2.style.display = 'flex'
        seephoto.style.display = 'none'
        wrapper.style.filter = 'none'
    }
}

btn.addEventListener('click', function(){
    form(passcheck());
});

seephoto.addEventListener('click', function(){
    boxleft3.style.display = 'flex';
    boxleft2.style.display = 'none';
    boxleft.style.display = 'none';
});

playbtn.addEventListener('click', function(){
    vn.play();
    after.style.display = 'flex';
    before.style.display = 'none';
    boxleft.style.display = 'none';
    boxleft2.style.display = 'flex';
    boxleft3.style.display = 'none';
})

ulimg1.addEventListener('click', function(){
    notif.classList.toggle('show');
    info.classList.remove('show');
})

ulimg2.addEventListener('click', function(){
    info.classList.toggle('show');
    notif.classList.remove('show');
})