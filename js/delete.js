var botaoDeletar = document.querySelector('#delet-maquina');

botaoDeletar.addEventListener("click",function (event) {
  event.preventDefault();
  console.log("Delete");
  var name = String(document.getElementById("filtrar-tabela").value);
  deletarDoBanco(name);
});

function deletarDoBanco(maquina) {
  var transaction = db.transaction("maquina", "readwrite");
  var objectStore = transaction.objectStore("maquina");
  var request = objectStore.delete(name);
  request.onsuccess = function(event) {
      // It's gone!
  };
}
