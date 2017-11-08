window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("top").style.display = "block";
    }
    else{
        document.getElementById("top").style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function hide() {
    var picture = document.getElementById('bigPicture');
    var sponge =  document.getElementById('sponge');
    if(picture.style.display == "none"){
       sponge = "none";
    }
}