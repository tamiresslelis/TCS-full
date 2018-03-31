var botaoAdicionar = document.querySelector('#adicionar-maquina');
botaoAdicionar.addEventListener("click",function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var maquina = obtemMaquinaDoFormulario(form);
  //cria a tr a td do paciente

  adicionaMaquinaNaTabela(maquina);

  var transaction = db.transaction("people", "readwrite");
  var objectStore = transaction.objectStore("people");
  var request = objectStore.add({ name:name, email: email });
  request.onsuccess = function (evt) {
      // do something after the add succeeded
      console.log("done with insert");
  };
}, false);

});

function adicionaMaquinaNaTabela(maquina) {
  var maquinaTr = montaTr(maquina);
  var tabela = document.querySelector("#tabela-maquina");
  //tras o tr para dentro da tabela
  tabela.appendChild(maquinaTr);
}


function obtemMaquinaDoFormulario(form){

  var maquina ={
      //caracteristicas
      nome:form.nome.value,
      status:function getRandomArbitrary(1, 4) {
        return Math.random() * (4 - 1) + 1;
      }
  }
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
