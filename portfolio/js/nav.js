let nav = `
<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="portfolio.html">Web Portfolio</a>
<a href="pricing.html">Pricing</a>
<a href="#">?????</a>
<a href="contact.html">Contact</a>
`

let footer = `
<a href="mailto:eoreizy@eastsideprep.org">eoreizy@eastsideprep.org</a>
<a href="tel:4255539082">(425) 553-9082</a>
<a href="">Eastside Preparatory School: 10613 NE 38th Pl, Kirkland, WA 98033</a>
`
document.getElementsByClassName("topnav")[0].innerHTML = nav;
document.getElementsByClassName("footer")[0].innerHTML = footer;