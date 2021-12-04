let e_newsletter_email = document.getElementById("newsletter-email");
let e_newsletter_submit = document.getElementById("newsletter-submit");

e_newsletter_submit.onclick = function () {
    let user_email = e_newsletter_email.value;

    e_newsletter_email.readOnly = true;

    e_newsletter_submit.innerText = "✔︎";
    e_newsletter_submit.classList.add("disappear");
}

