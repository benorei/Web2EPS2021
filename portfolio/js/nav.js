let nav_cont = `
<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="portfolio.html">Web Portfolio</a>
<a href="pricing.html">Pricing</a>
<a href="#">?????</a>
<a href="contact.html">Contact</a>
`

let footer_cont = `
<a href="mailto:eoreizy@eastsideprep.org">eoreizy@eastsideprep.org</a>
<a href="tel:4255539082">(425) 553-9082</a>
<a href="">Eastside Preparatory School: 10613 NE 38th Pl, Kirkland, WA 98033</a>
`

let topnav = document.getElementsByClassName("topnav")[0];
let footer = document.getElementsByClassName("footer")[0];

let hamburger_state = false;
topnav.classList.add("hamburg-none");

topnav.innerHTML = nav_cont;
footer.innerHTML = footer_cont;

let hamburger = document.getElementById("hamburger");


hamburger.addEventListener("click", function() {
    if(hamburger_state) {
        topnav.classList.add("hamburg-none");
        hamburger_state = false;
    } else {
        topnav.classList.remove("hamburg-none");
        hamburger_state = true;
    }
});