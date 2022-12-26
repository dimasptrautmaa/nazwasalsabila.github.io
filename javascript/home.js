const vn = document.getElementById('vn');
const playbtn = document.getElementById('box-img');
const after = document.getElementById('after');
const before = document.getElementById('before');

playbtn.addEventListener('click', function(){
    vn.play();
    after.style.display = 'flex';
    before.style.display = 'none';
})