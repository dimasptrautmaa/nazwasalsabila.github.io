const img1 = document.getElementById('path1');
const img2 = document.getElementById('path2');
const text = document.getElementById('boxtext');
const no = document.getElementById('no');
const boxno = document.getElementById('boxno');
const yes2 = document.getElementById('yes2');
const no2 = document.getElementById('no2');
const section2 = document.getElementById('section2');
const angry = document.getElementById('angry');
const yes = document.getElementById('yes');
const asn = document.getElementById('asn');
const csd = document.getElementById('csd');
const hn = document.getElementById('hn');
const msg = document.getElementById('msg');
const after = document.getElementById('after');
const calender = document.getElementById('calender');
const first = document.getElementById('first');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    img1.style.left = value * -0.55 + 0 + 'px';
    img2.style.right = value * -0.55 + 'px';
    text.style.top = value * 0.8 + 'px';
})

yes.addEventListener('click', function(){
    asn.style.display = 'flex'
    csd.style.display = 'none'
    hn.style.display = 'none'
    msg.style.display = 'none'
    after.style.display = 'flex'
    after.style.textTransform = 'uppercase'
    calender.style.visibility = 'visible'
})

no.addEventListener('click', function(){
    boxno.style.display = 'flex';
    section2.style.zIndex = '0'
});

yes2.addEventListener('click', function(){
    yes2.classList.add('slide1');
    angry.play();
})

no2.addEventListener('click', function(){
    boxno.style = 'none';
    yes2.classList.remove('slide1');
    section2.style.zIndex = '1'
});
