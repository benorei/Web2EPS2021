let nav_cont = `
<a href="index.html">HOME</a>
<a href="about.html">ABOUT</a>
<a href="pricing.html">PRICING</a>
<a href="portfolio.html">WEB PORTFOLIO</a>
<a href="portfoliojava.html">JAVA PORTFOLIO</a>
<a href="contact.html">CONTACT</a>
`

//footer icons using fontawesome.com
let footer_cont = `
<span>&copy; Everest Oreizy 2022 // This is not an official website and is meant for educational purposes only.</span><br>
<a href="#tel" class="smi fg"><i class="bi bi-telephone-fill"></i></a>
<a href="mailto:eoreizy@eastsideprep.org" class="smi fg"><i class="bi bi-envelope"></i></a>
<a href="#no-instagram" class="smi fg"><i class="bi bi-instagram"></i></a>
<a href="#no-twitter" class="smi fg"><i class="bi bi-twitter"></i></a> 
    <a href="about.html" class="fg btna pad10 dt center smi-l hvr-underline whi">
    About</a>
    <a href="portfolio.html" class="fg btna pad10 dt center smi-l hvr-underline whi">Web Portfolio</a>
    <a href="pricing.html" class="fg btna pad10 dt center smi-l hvr-underline whi">Pricing</a>
    <a href="portfoliojava.html" class="fg btna pad10 dt center smi-l hvr-underline whi">Java Portfolio</a>
    <a href="contact.html" class="fg btna pad10 dt center smi-l hvr-underline whi">Contact</a>

`

let topnav = document.getElementsByClassName("topnav")[0];
let footer = document.getElementsByClassName("footer")[0];

let hamburger_state = false;
// topnav.classList.add("hamburg-show");
footer.classList.add("dt");


topnav.innerHTML = nav_cont;
footer.innerHTML = footer_cont;

let hamburger = document.getElementById("hamburger");

hamburger.classList.add("hvr")

hamburger.addEventListener("click", function() {
    if(hamburger_state) {
        topnav.classList.remove("hamburg-show");

        hamburger_state = false;
    } else {
        topnav.classList.add("hamburg-show");

        hamburger_state = true;
    }
});