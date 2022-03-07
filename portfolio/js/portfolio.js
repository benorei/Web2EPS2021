let portfolio = document.getElementById("portfolio");
let lastupdated = document.getElementById("lastupdated");
let popsurface = document.getElementById("portfolio-popout");
let closebtn = document.getElementById("portfolio-pop-close");

lastupdated.innerText = "Last updated: " + projects.lastupdated;

// Sort (will make options later)
web = projects.web.sort(sortyr);



// Populate the portfolio
web.forEach(item => {
    let el = document.createElement("div");
    el.classList.add("fg");
    el.classList.add("portfolio-item");
    el.classList.add("cp3");
    el.classList.add("dt");

    //heading
    let header = document.createElement("h3");
    header.innerText = item.name;

    //description
    let description = document.createElement("div");
    description.classList.add("portfolio-description");
    description.classList.add("hbox");

    let blurb = document.createElement("p");
    blurb.innerText = item.description;

    let type_yr = document.createElement("p");
    type_yr.classList.add("portfolio-type-yr");
    type_yr.innerText = item.type.toUpperCase() + " (" + item.year + ")";

    description.appendChild(blurb);
    description.appendChild(type_yr);


    //image
    let image = document.createElement("img");
    image.src = item.imageurl;
    image.classList.add("portfolio-image");

    //add everything to the div
    el.appendChild(header);
    el.appendChild(description);
    el.appendChild(image);

    //add onclick to div
    el.onclick = function () {
        pop(el, item);
    }

    //add the div to the portfolio
    portfolio.appendChild(el);
});

//sort by year
function sortyr(one, two) {
    if (one.year < two.year) {
        return -1;
    } else if (one.year > two.year) {
        return 1;
    } else {
        return 0;
    }
}

let elrect = null;

//toggle large view
function pop(element, item) {
    popsurface.style.display = "block";
    popsurface.src = item.url;

    //have to use settimeout, otehrwise it interrupts the transitions.
    setTimeout(() => popsurface.classList.add("displayed"), 100);
    
    
    document.body.style.overflow = "hidden";

    //display the close button as well
    closebtn.classList.add("displayed");
}

function endpop() {
    popsurface.classList.remove("displayed");
    closebtn.classList.remove("displayed");
    document.body.style.overflow = "auto";
    // popsurface.style.display = "none";
    setTimeout(() => popsurface.style.display = "none", 600);
}

popsurface.style.display = "none"; //set just for the first time