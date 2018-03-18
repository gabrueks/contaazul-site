$(document).ready(function() {
  $(".buttonTrigger").click(function () {
    $('.divHide').fadeOut("slow");
    $('.centered').append('<h2 class="main-text-font text-center font-weight-bold"><strong>ContaAzul</strong></h2> <br> <br>' +
    '<h1 class="main-text-font text-center font-weight-light text-nowrap">Obrigado por se inscrever,</h1>' +
    '<h1 class="main-text-font text-center font-weight-light text-nowrap">em breve receberá novidades!</h1>&nbsp' +
    '<h4 class="main-text-font text-center text-nowrap"><small style="color: white;">Compartilhe essa página com amigos para atenderem ao evento com você.</small></h4> <br> <br>'+
    '<button style="background-color: Transparent; background-repeat:no-repeat; border: 1px solid white; border-radius:4px ; cursor:pointer; overflow: hidden; outline:none; padding: 10px 24px;"><a href="#" style="font-size: 1em; text-decoration: none; color: white"><i class="fa fa-facebook fa-lg"></i> Compartilhar</a></button>' +
    '<button style="background-color: Transparent; background-repeat:no-repeat; border: 1px solid white; border-radius:4px ; cursor:pointer; overflow: hidden; outline:none; padding: 10px 24px;"><a href="#" style="font-size: 1em; text-decoration: none; color: white"><i class="fas fa-envelope"></i> Mandar e-mail</a></button>'
  ).hide().fadeIn(3000);
  });
});
