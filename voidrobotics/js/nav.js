//variables that are nice
let nav_object = document.getElementsByClassName("nav")[0];
let footer_object = document.getElementsByClassName("footer")[0];
let page_content_object = document.getElementsByClassName("page-content")[0];
let title_object = document.getElementsByTagName("title")[0];
let nav_items_object = document.getElementsByClassName("opt");

// Navbar html
let nav = `
<span class="title">Void Robotics</span>
<a class="sub opt" href=".">Home</a>
<a class="sub opt" href="products">Products</a>
<a class="sub opt" href="contact">Contact</a>
`

// footer html
let footer = `
    <div class="footer-column">
        9884 Kirkland Pl<br>Seattle, WA 98404
    </div>
    <div class="footer-column">
        &copy; 2021 Void Robotics <br> <a class="sub-r opt" href="../index.html">Directory</a> | <a class="sub-r opt" href="https://github.com/everestoreizy/everestoreizy.github.io/tree/master/voidrobotics">Source</a>
    </div>
    <div class="footer-column"><a class="hidden-link" href="mailto:eoreizy@eastsideprep.org">eoreizy@eastsideprep.org</a><br>(425) 553-9082 <a href="contact">More...</a></div>
`

//Set the nav and footer. I do it here so i don't write it out on every page
nav_object.innerHTML = nav;
footer_object.innerHTML = footer;

let title_text = title_object.innerText;

for (let index = 0; index < nav_items_object.length; index++) {
    let text = nav_items_object[index].innerText;
    if(title_text.startsWith(text)){
        nav_items_object[index].classList.add("active");
    }
    
}

//Set content padding to make sure the footer doesn't cover content.
function resize_footer () {
    console.log("trying to resize the footer.");
    //Find the perfect height so the footer is at the bottom of the page: 
    //The viewport height minus the height of the body and the footer, leaving just how tall the space should be.
    let spacing = window.innerHeight - page_content_object.clientHeight - footer_object.clientHeight;

    //If the body is too small for the viewport, some extra space needs to be added. If not, use the normal spacing.
    if(spacing > 0){
        footer_object.style.marginTop = spacing + "px";
    } else {
        footer_object.style.marginTop = "20px";
    }
}

//Resize the footer once per second so it says when you change the window size. I don't know a better way to do this.
resize_footer();
setInterval(resize_footer, 5000);