
var hora = new Date().getHours();

    if (hora >=8 && hora < 14) {

        window.document.getElementById("image").setAttribute("src", "./img/gif1.gif")
        // console.log("bom dia");

    } if (hora >= 18 && hora < 20) {

        window.document.getElementById("image").setAttribute("src", "./img/gif2.gif")
        // console.log("boa tarde");

    } if (hora >= 20 && hora < 8) {

        window.document.getElementById("image").setAttribute("src", "./img/gif3.gif")
        // console.log("boa noite");
    }




