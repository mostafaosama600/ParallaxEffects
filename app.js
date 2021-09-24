var position = document.documentElement;
position.addEventListener('mousemove', e =>{
    position.style.setProperty('--mouse-x', e.clientX + 'px');
})

// --mouse-x = --x 
//  mouse x اشمعنا
//  عشان بنسخدم كلاينت اكس
