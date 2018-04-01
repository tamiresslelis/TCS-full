var botaoAdicionar = document.querySelector('#delet-maquina');
botaoAdicionar.addEventListener("click",function (event) {
  event.preventDefault();

  var name = String(document.getElementById("txtID").value);

  var transaction = db.transaction("people", "readwrite");
  var objectStore = transaction.objectStore("people");
  var request = objectStore.delete(id);
  request.onsuccess = function(evt) {
      // It's gone!
  };
  }, false);





});
