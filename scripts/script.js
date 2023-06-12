function addJavascript(jsname,pos) {
    var th = document.getElementsByTagName(pos)[0];
    var s = document.createElement('script');
    s.setAttribute('type','text/javascript');
    s.setAttribute('src',jsname);
    th.appendChild(s);
}



function includeHTML() {
  var elements, i, elmnt, file, xhttp
  elements = document.getElementsByClassName('include')
  for (i = 0; i < elements.length; i++) {
    elmnt = elements[i]
    file = elmnt.getAttribute("path")
    if (file) {
      xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText}
          if (this.status == 404) {elmnt.innerHTML = "Página não encontrada"}
          elmnt.removeAttribute("path");
          includeHTML()
        }
      }
      xhttp.open("GET", file, true)
      xhttp.send()
      return
    }
  }
}




addJavascript('https://code.jquery.com/jquery-3.3.1.slim.min.js','head');
addJavascript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js','head');
addJavascript('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js','head');
includeHTML()