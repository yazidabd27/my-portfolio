
const menuIcon=document.getElementById('menu-icon');
const closeIcon=document.getElementById('close-icon');
const navBar=document.querySelector('nav');

menuIcon.onclick=()=>{
    navBar.classList.remove('-translate-x-full');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
}

closeIcon.onclick=()=>{
    navBar.classList.add('-translate-x-full');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

const navLinks=document.querySelectorAll('nav a');
const sections=document.querySelectorAll('section');

navLinks.forEach(link=>{
    link.onclick=()=>{
        disable();
        link.classList.add('active');
    }
})

window.onscroll=()=>{
    let top=window.scrollY;
    
    sections.forEach(section=>{
        let offset=section.offsetTop;
        let height=section.offsetHeight;
        let id=section.getAttribute('id');

        if(top>=offset && top<offset+height){
            disable();
            document.querySelector(`a[href='#${id}']`).classList.add('active');
        }
    })

}
function disable(){
    navLinks.forEach(link=>{
        link.classList.remove('active');
    })
}

const projects=document.querySelectorAll('#project');
const drops=document.querySelectorAll('#projects .drop');

projects.forEach((project, idx)=>{
    project.onclick=()=>{
        if(drops[idx].classList.contains('-translate-y-full')){
            drops[idx].classList.remove('-translate-y-full');
        }else{
            drops[idx].classList.add('-translate-y-full');
        }
    }
})


