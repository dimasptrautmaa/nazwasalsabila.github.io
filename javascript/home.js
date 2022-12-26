const vn = document.getElementById('vn');
const playbtn = document.getElementById('box-img');
const after = document.getElementById('after');
const before = document.getElementById('before');
const notif = document.getElementById('notif');
const info = document.getElementById('info');
const ulimg1 = document.getElementById('ul-img1');
const ulimg2 = document.getElementById('ul-img2');
const wrapper = document.getElementById('wrapper');

playbtn.addEventListener('click', function(){
    vn.play();
    after.style.display = 'flex';
    before.style.display = 'none';
    wrapper.style.filter = 'none';
    box.classList.add('grey');
})

ulimg1.addEventListener('click', function(){
    notif.classList.toggle('show');
    info.classList.remove('show');
})

ulimg2.addEventListener('click', function(){
    info.classList.toggle('show');
    notif.classList.remove('show');
})