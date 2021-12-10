// Navbar html
let nav = `
<span class="title">Void Robotics</span>
<a class="sub opt" href=".">Home</a>
<a class="sub opt" href="products">Products</a>
<a class="sub opt" href="contact">Contact</a>
`

// footer html
let footer = `

`

// Directory and source (to be displayed only on github)
let directory = `
<a class="sub-r opt" href="../index.html">Directory</a>
`
let source = `
<a class="sub-r opt" href="https://github.com/everestoreizy/everestoreizy.github.io/tree/master/voidrobotics">Source</a>
`

//If the website is being hosted on GitHub pages or being run off my computer, show the "Directory" option. This prevents the directory option from being shown while it's hosted on the void.noallus.nl domain where that page isn't available.
//If the website is being hosted on GitHub pages, show the link to the source code.
if ( window.location.hostname == "everestoreizy.github.io" ) {
    nav += directory;
    // nav += source;
}

document.getElementsByClassName('nav')[0].innerHTML = nav;
// document.getElementsByClassName('footer')[0].innerHTML = footer;

let title = document.getElementsByTagName("title")[0].innerText;

let nav_items = document.getElementsByClassName("opt");

for (let index = 0; index < nav_items.length; index++) {
    let text = nav_items[index].innerText;
    if(title.startsWith(text)){
        nav_items[index].classList.add("active");
    }
    
}

//Set content padding to make sure the footer doesn't cover content.
function resize_footer () {
if ( window.innerHeight - document.body.clientHeight < 0){
    document.getElementsByClassName("page-content")[0].style.paddingBottom = document.getElementsByClassName("footer")[0].offsetHeight + 20 + "px";
}
}

resize_footer();
setInterval(resize_footer, 1000);