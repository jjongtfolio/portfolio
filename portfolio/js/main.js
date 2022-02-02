'use strict';


const workBtnContainer = document.querySelector('.work_nav');
const projectContainer = document.querySelector('.work_project');
const projects = document.querySelectorAll('.project');
const toggleBtn = document.querySelector('.navbar_togleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}); 

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    const active = document.querySelector('.work_btn.selected');
    if (active != null) {
        active.classList.remove('selected');
    }
    e.target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});

$("#work.section").click(function() {
//    $(".navbar_menu").hide();
	$(".navbar_menu").removeClass("active");
//	$('aside').css('display','none');
});    
