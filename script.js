const open =document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const eng = document.getElementById('english');
const switchBtn = document.querySelector('.chn')


open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));

// switch language mode - CHN -> ENG
switchBtn.addEventListener('click', (e) =>{
    let contact = document.getElementById('contact')
    if(switchBtn.classList.contains('chn')){
        // debugger;
        switchBtn.classList.remove('chn')
        e.target.innerHTML ='ENGLISH'
        contact.innerHTML = '联系'
        switchCHN('chn')
    }else{
        switchBtn.classList.add('chn')
        e.target.innerHTML = '中文'
        contact.innerHTML = 'Contact Me'
        switchCHN('eng')
    }
})
function switchCHN(language) {
    let home = document.getElementById('fa-home')
    let about = document.getElementById('fa-user-alt')
    let contact = document.getElementById('fa-envelope')
    if( language == 'chn'){
        home.innerHTML = '主页';
        about.innerHTML = '关于我';
        about.href = 'about-me-chn.html';
        contact.innerHTML = '联系';
    }else if( language == 'eng'){
        home.innerHTML = 'Home';
        about.innerHTML = 'About';
        about.href = 'about-me.html';
        contact.innerHTML = 'Contact';
    }

}