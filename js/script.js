const btnEnviar = () => {
  var sucesso = document.getElementById("bannerAviso");

  sucesso.style.display = "flex";

  frmContato.reset();

  setTimeout(function () {
    sucesso.style.display = "none";
  }, 3000);
};
