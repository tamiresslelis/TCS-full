
var indexedDB = window.indexedDB || window.mozIndexedDB ||
                    window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;

//declaration
var db;
(function () {
    var maquinaData = [
        { name: "Máquina de Lavar", status: "1"  },
        { name: "Máquina 2", status: "2" }
    ];

      let initDb = () => {
      let request = indexedDB.open("database", 1);

      request.onerror = (event) =>{ console.log("IndexedDB error: " + evt.target.errorCode);};

      request.onsuccess = (event) => { db = request.result; };

      request.onupgradeneeded = (event) => {

          let objectStore = event.currentTarget.result.createObjectStore(
                   "maquina", { keyPath: "id", autoIncrement: true });

          objectStore.createIndex("name", "name", { unique: false });
          objectStore.createIndex("status", "status", { unique: false });

          for (i in maquinaData) {
              objectStore.add(maquinaData[i]);
          }
      };
    }

    function contentLoaded() {
    initDb();

    btnAdd.addEventListener("click", function () {
        

        var transaction = db.transaction("maquina", "readwrite");
        var objectStore = transaction.objectStore("maquina");
        var request = objectStore.add({ name:name, status:status });
        request.onsuccess = function (event) {
                    // do something after the add succeeded
                            console.log("done with insert");
        };
    }, false);

})
