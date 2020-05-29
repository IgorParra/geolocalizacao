$(document).ready(function(){
    var modal= document.getElementById("aviso-modal");
    var span = document.getElementsByClassName("fechar")[0];
    var html = document.getElementsByTagName("html")[0];
    modal.style.display='block';
    html.style.overflow="hidden"

    span.onclick=function(){
        modal.style.display='none';
        html.style.overflow='auto'
    }
    
    
});  

$('section#Planos-div a').click(function(){
    var preco = document.getElementById('preco-cartao').innerHTML
    alert(preco);
})