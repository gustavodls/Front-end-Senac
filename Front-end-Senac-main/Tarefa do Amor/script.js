function fuja() {
    var botaonao = document.getElementById("nao")

    var largura = window.innerWidth;
    var altura = window.innerHeight;

    var maxX = largura - botaonao.offsetWidth;
    var maxY = altura - botaonao.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    
    botaonao.style.left = randomX + "px";
    botaonao.style.top = randomY + "px";
}