


// window.addEventListener('scroll', ()=>{
//     const navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('window_scroll' , window.scrolly>10);

// });


window.addEventListener('scroll', ()=>{
    document.querySelector('.navbar').classList.toggle
    ('window_scroll', window.scrollY > 0);
 });

 const menu_btn = document.querySelector('.menu_icon');
 const  sidebar_menu = document.querySelector('.sidebar_menu');
 const cancel_btn = document.querySelector('.cancel_btn');

 menu_btn.addEventListener("click", ()=>{
    sidebar_menu.style. left="0";
 })
 cancel_btn.addEventListener("click", ()=>{
    sidebar_menu.style. left="-1000px";
 })