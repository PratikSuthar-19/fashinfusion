



// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', ()=>{
//     document.querySelector('navbar').classList.toggle
//     ('window_scroll', window.scrollY > 100);
//  });

const navbar = document.querySelector(".navbar");
const navbar_left = document.querySelector(".navbar_left");
const navbar_right = document.querySelector(".navbar_right");
const men = document.querySelector("#men");
const women = document.querySelector("#women");
window.addEventListener('scroll', () => {
   if (window.scrollY > 100) {
      // navbar.style.color ='black';
       navbar.style.backgroundColor = 'rgba(255,255,255,0.5)';// Change to your desired color
       navbar_left.style.color = "black";
       navbar_right.style.color = "black";
       men.style.color="black";
       women.style.color = "black";

   } else {
       navbar.style.backgroundColor = 'transparent';
       navbar_left.style.color = "aliceblue";
       navbar_right.style.color = "aliceblue";
       men.style.color="aliceblue";
       women.style.color = "aliceblue";
   }
});


 const menu_btn = document.querySelector('.menu_icon');
 const  sidebar_menu = document.querySelector('.sidebar_menu');
 const cancel_btn = document.querySelector('.cancel_btn');

 menu_btn.addEventListener("click", ()=>{
    sidebar_menu.style. left="0";
 })
 cancel_btn.addEventListener("click", ()=>{
    sidebar_menu.style. left="-1000px";
 });
 


 const search = document.querySelector('.search_icon');
 const searchpage = document.querySelector('.search_container');
 const cancel_searchpage = document.querySelector('.cancel_ic');

 search.addEventListener('click', ()=>{
   searchpage.style.top="0";
 })
 cancel_searchpage.addEventListener('click',()=>{
   searchpage.style.top="-1000px";
 })




  const open_cart = document.querySelector(".cart");
 const close_cart = document.querySelector(".cart_top_right");
 const cartpage = document.querySelector(".cartbar");

 open_cart.addEventListener('click', ()=>{
   cartpage.style.right="0";
 })
 close_cart.addEventListener('click',()=>{
   cartpage.style.right="-1000px";
 })