function addArrowIcon(){
    elements = document.getElementsByClassName('modal')
    for (i = 0; i < elements.length; i++){
        //alert(elements[i].innerHtml)
        //elements[i].innerHtml += '<img class="icon" src="./imgs/arrow-down-icon.png">'


        let icon = document.createElement('img')
        icon.classList.add('icon')
        icon.src = './assets/icons/arrow-down-icon.png'

        elements[i].append(icon)
    }
}


addArrowIcon()
