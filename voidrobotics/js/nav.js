let nav_elements = [
    ["Home", "."],
    ["Products", "/products"],
    ["Contact", "/contact"]
]

let nav = `
<span class="sub title">Void Robotics</span>
<a class="sub opt" href=".">Home</a>
<a class="sub opt" href="products">Products</a>
<a class="sub opt" href="contact">Contact</a>
`

let directory = `
<a class="sub-r opt" href="../index.html">Directory</a>
`
let source = `
<a class="sub-r opt" href="https://github.com/everestoreizy/everestoreizy.github.io/tree/master/voidrobotics">Source</a>
`

let temp = nav;

//If the website is being hosted on GitHub pages or being run off my computer, show the "Directory" option. This prevents the directory option from being shown while it's hosted on the void.noallus.nl domain where that page isn't available.
//If the website is being hosted on GitHub pages, show the link to the source code.
if ( window.location.hostname == "everestoreizy.github.io" ) {
    temp += directory;
    temp += source;
}

console.log(temp);

document.getElementsByClassName('nav')[0].innerHTML = temp;

let title = document.getElementsByTagName("title")[0].innerText;

let nav_items = document.getElementsByClassName("opt");

for (let index = 0; index < nav_items.length; index++) {
    let text = nav_items[index].innerText;
    console.log(text);
    if(title.startsWith(text)){
        nav_items[index].classList.add("active");
    }
    
}