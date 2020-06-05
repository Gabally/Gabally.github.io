var old = document.getElementById("editor").value;
old = btoa(old);
old = old.split("+").join("~");
old = old.split("=").join("|");
old = old.split("/").join("_");
document.getElementById("url-result").value = "https://" + window.location.hostname + "?p=" + old;
var qrcode = new QRCode("qrcode");
qrcode.makeCode(("https://" + window.location.hostname + "?p=" + old));
document.getElementById("qrcode").style = "";

function update_iframe(){
    var html = document.getElementById("editor").value;
    var tmp = html;
    html = btoa(html);
    html = html.split("+").join("~");
    html = html.split("=").join("|");
    html = html.split("/").join("_");
    var framed = document.getElementById("out")
    var shurl = document.getElementById("url-result");
    if (old != html){
        framed.src = "data:text/html;base64," + btoa(tmp);
        shurl.value = "https://" + window.location.hostname + "?p=" + html;
        qrcode.makeCode(("https://" + window.location.hostname + "?p=" + html));
        document.getElementById("qrcode").style = "";
    }
    old = html
}

function copyText() {
    var copyText = document.getElementById("url-result");
    copyText.select();
    document.execCommand("copy");
    alert("Copied to the clipboard");
}

var urlParams = new URLSearchParams(window.location.search);
var PageData = urlParams.get('p');

if (PageData == null){
    setInterval(update_iframe, 500);
} else {
    document.body.innerHTML = '';
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";
    var newFrame = document.createElement("iframe");
    newFrame.setAttribute('style', 'width:100%');
    newFrame.setAttribute('frameborder', '0');
    newFrame.setAttribute('allowfullscreen', '');
    newFrame.setAttribute('id', 'page');
    document.body.appendChild(newFrame);
    var x = document.getElementById('page'); 
    x.style.height = "100%";
    PageData = PageData.split("~").join("+");
    PageData = PageData.split("|").join("=");
    PageData = PageData.split("_").join("/");
    x.src = "data:text/html;base64," + PageData;
}
