function setconfig() {
    var texts = {
        "title": "Shopping cart"
    };
    document.title = texts.title;
    document.getElementById("navTitle").innerHTML = texts.title;
}

setconfig();