let header = document.querySelector('header'),
        nav = document.querySelector('nav');

        nav.addEventListener('mouseover', ()=>{
            header.style.height = '430px';
        })

        nav.addEventListener('mouseout', ()=>{
            header.style.height = '163px';
        })