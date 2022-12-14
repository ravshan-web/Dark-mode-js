const toggleThemeMode = document.getElementById('themeToggle');
const themeChecker = document.getElementById('themeChecker');
const siteHeader = document.querySelector('.site__header');
const themeIcon = document.querySelector('#toggleSun');
const navLinkWords = document.querySelectorAll('.nav-link-words');



// console.log(navLinkWords);

toggleThemeMode.addEventListener("click", function(){
    themeIcon.classList.toggle('.bxs-moon');
    if(themeIcon.classList.toggle('.bxs-sun')){
        themeChecker.style = "right: -60px";
    document.body.style = "background-color: #444"
    siteHeader.style = "background-color: #333; box-shadow: none; border-bottom: 3px solid yellow";
    navLinkWords.style = "Color: red";
    }
    else{
        themeIcon.style = ".bxs-sun";
        themeChecker.style = "left: -10px";
    document.body.style = "background-color: #fff"
    siteHeader.style = "background-color: #fff;";
    navLinkWords.style = "Color: yellow";
    }
    
})

