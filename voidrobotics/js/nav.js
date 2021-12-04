let nav = `
<span class="sub title">Void Robotics</span>
<a class="sub opt" href="index.html">Home</a>
<a class="sub opt" href="products.html">Products</a>
<a class="sub opt" href="contact.html">Contact</a>
<a class="sub-r opt" href="../index.html">Directory</a>
`

document.getElementsByClassName('nav')[0].innerHTML = nav;

let title = document.getElementsByTagName("title")[0].innerText;

let nav_items = document.getElementsByClassName("opt");

for (let index = 0; index < nav_items.length; index++) {
    let text = nav_items[index].innerText;
    console.log(text);
    if(title.startsWith(text)){
        nav_items[index].classList.add("active");
    }
    
}