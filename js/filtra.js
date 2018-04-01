var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function () {

    //console.log(this.value);
    var maquinas = document.querySelectorAll(".maquinas");

    if (this.value.length > 0) {

      for (var i = 0; i < maquinas.length ; i++){
          var maquina = maquinas[i];
          var tdNome = maquina.querySelector(".info-nome");
          var nome = tdNome.textContent;
          var expressao = new RegExp(this.value,"i");

          if (!expressao.test(nome)) {
             maquina.classList.add("invisivel");
          } else {
            maquina.classList.remove("invisivel");
          }
      }
    }else{
      for (var i =0; i < maquinas.length; i++){
        var maquina = maquinas[i];
        maquina.classList.remove("invisivel");
      }
    }

});
