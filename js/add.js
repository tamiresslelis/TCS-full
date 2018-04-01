var botaoAdicionar = document.querySelector('#adicionar-maquina');
botaoAdicionar.addEventListener("click",function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var maquina = obtemMaquinaDoFormulario(form);

  adicionaMaquinaNaTabela(maquina);

});

function adicionaNoBanco(maquina) {
    var transaction = db.transaction("maquina", "readwrite");
    var objectStore = transaction.objectStore("maquina");
    var request = objectStore.add({ name:name, status:status });
    request.onsuccess = function (event) {
      // do something after the add succeeded
      console.log("done with insert");
    };
}


function adicionaMaquinaNaTabela(maquina) {
  var maquinaTr = montaTr(maquina);
  var tabela = document.querySelector("#tabela-maquinas");
  //tras o tr para dentro da tabela
  tabela.appendChild(maquinaTr);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    var numero = Math.floor(Math.random() * (max - min)) + min;

    if(numero == 0){
       return "Inativo";

    }else if(numero == 1){
        return "Ativo";
    }else{
      return "Quebrado";
    }
}

function obtemMaquinaDoFormulario(form){

  var maquina ={
      //caracteristicas
      nome:form.nome.value,
      status: getRandomInt(0, 3)

  }
  console.log(maquina.nome+" "+maquina.status);
  return maquina;
}



function montaTr(maquina){
  var maquinaTr= document.createElement("tr");
  maquinaTr.classList.add("maquina");

  maquinaTr.appendChild(montaTd(maquina.nome,"info-nome"));
  maquinaTr.appendChild(montaTd(maquina.status,"info-status"));

  return maquinaTr;
}

function montaTd(dado,classe) {
    //cria td
    var td = document.createElement("td");
    //preenche TD
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
