let nav = `<div class="nav">
<span class="sub title">9884 Robotics</span>
<a class="sub opt">Home</a>
<a class="sub opt">Option 2</a>
<a class="sub opt">Option 3b</a>
</div>`

function write_nav(){
    document.getElementsByClassName('nav')[0].innerHTML = nav;
}