
//most of this is copied from portfolio.js with a few modifications
let portfolio = document.getElementById("portfolio");
let lastupdated = document.getElementById("lastupdated");

let optsort = document.getElementById("sortby");
let optfilteryr = document.getElementById("filteryr");
let optfiltertype = document.getElementById("filtertype");

let page = window.location.pathname.split("/").pop();

lastupdated.innerText = "Last updated: " + projects.lastupdated;

// the data variable is set on the HTML page. This is because this JS file is used twice, for portfolio.html and portfoliojava.html.

let notfoundmsg = document.createElement("div");
notfoundmsg.classList.add("fg", "cp3", "pad10");
notfoundmsg.innerText = "No results found.";

//onload first time setup
sortnfilter();

//filter and sort in one
function sortnfilter() {
    let n = projects.java;

    //Filter
    let filteryr = optfilteryr.value;
    let filtertype = optfiltertype.value;

    // console.log("filteryr: " + filteryr + " , item.year: ");

    if (filteryr != "all") {
        n = n.filter(function (item) {
            return item.year == filteryr;
        });
    }

    if (filtertype != "all") {
        n = n.filter(function (item) {
            return item.type == filtertype;
        });
    }

    // console.log(n);

    //Sort (has to go after filtering)
    if (optsort.value == "year") {
        n=n.sort(sortyr);
    }
    if (optsort.value == "yeardesc") {
        n=n.sort(sortyr).reverse();
    }
    else if (optsort.value == "title") {
        n=n.sort(sortname);
    }
    else if (optsort.value == "type") {
        n=n.sort(sorttype);
    }

    //Repopulate (will retrigger .fg animation)
    //if array is empty, return that message.
    if (n.length == 0) {
        portfolio.innerHTML = "";
        portfolio.appendChild(notfoundmsg);
    } else {
        populate(n);
    }
}

//set sortnfilter() to run on change of any of the 4 dropdowns
optsort.onchange = sortnfilter;
optfilteryr.onchange = sortnfilter;
optfiltertype.onchange = sortnfilter;

// Populate the portfolio
function populate(data) {
    portfolio.innerHTML = "";
    data.forEach(item => {
        let el = document.createElement("div");
        el.classList.add("fg");
        el.classList.add("portfolio-item");
        el.classList.add("cp3");
        el.classList.add("dt");

        //heading
        let header = document.createElement("h2");
        header.innerText = item.name;

        //description
        let description = document.createElement("div");
        description.classList.add("portfolio-description");
        description.classList.add("hbox");

        let blurb = document.createElement("p");
        blurb.innerText = item.description;

        let type_yr = document.createElement("p");
        type_yr.classList.add("portfolio-type-yr");
        type_yr.innerText = item.type.toUpperCase() + "\n " + item.year;

        description.appendChild(blurb);
        description.appendChild(type_yr);

        //add everything to the div
        el.appendChild(header);
        el.appendChild(description);

        //download on click
        el.onclick = function () {
            window.open(item.url);
        }

        //add the div to the portfolio
        portfolio.appendChild(el);
    });
}

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

function sortname(one, two) {
    if (one.name < two.name) {
        return -1;
    } else if (one.name > two.name) {
        return 1;
    } else {
        return 0;
    }
}

function sorttype(one, two) {
    if (one.type < two.type) {
        return -1;
    } else if (one.type > two.type) {
        return 1;
    } else {
        return 0;
    }
}