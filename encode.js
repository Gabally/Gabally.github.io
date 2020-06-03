var old = html = document.getElementById("editor").value;
document.getElementById("url-result").value = window.location.hostname + "?p=" + btoa(old);

function update_iframe(){
    var html = document.getElementById("editor").value;
    var framed = document.getElementById("out")
    var shurl = document.getElementById("url-result");
    if (old != html){
        framed.src = "data:text/html;base64," + btoa(html);
        shurl.value = window.location.hostname + "?p=" + btoa(html);
    }
    old = html
}

function copyText() {
    var copyText = document.getElementById("url-result");
    copyText.select();
    document.execCommand("copy");
    alert("Copied to the clipboard");
}

setInterval(update_iframe, 1000);