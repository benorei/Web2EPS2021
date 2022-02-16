let nav_cont = `
<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="portfolio.html">Web Portfolio</a>
<a href="pricing.html">Pricing</a>
<a href="#">?????</a>
<a href="contact.html">Contact</a>
`

//footer icons using fontawesome.com
let footer_cont = `
<span>&copy; Everest Oreizy 2022</span><br>
<a href="tel:4255539082" class="smi fg"><i class="bi bi-telephone-fill"></i></a>
<a href="mailto:eoreizy@eastsideprep.org" class="smi fg"><i class="bi bi-envelope"></i></a>
<a href="instagram.com/everestoreizy" class="smi fg"><i class="bi bi-instagram"></i></a>
<a href="#no-twitter" class="smi fg"><i class="bi bi-twitter"></i></a> 
    <a href="about.html" class="fg pad10 cp5 dt center smi-l hvr-underline whi">
    About</a>
    <a href="portfolio.html" class="fg pad10 cp5 dt center smi-l hvr-underline whi">Web Portfolio</a>
    <a href="pricing.html" class="fg pad10 cp5 dt center smi-l hvr-underline whi">Pricing</a>
    <a href="#" class="fg pad10 cp5 dt center smi-l hvr-underline whi">???</a>
    <a href="contact.html" class="fg pad10 cp5 dt center smi-l hvr-underline whi">Contact</a>

`

let topnav = document.getElementsByClassName("topnav")[0];
let footer = document.getElementsByClassName("footer")[0];

let hamburger_state = false;
topnav.classList.add("hamburg-show");

topnav.innerHTML = nav_cont;
footer.innerHTML = footer_cont;

let hamburger = document.getElementById("hamburger");


hamburger.addEventListener("click", function() {
    if(hamburger_state) {
        topnav.classList.remove("hamburg-none");

        hamburger_state = false;
    } else {
        topnav.classList.add("hamburg-none");

        hamburger_state = true;
    }
});