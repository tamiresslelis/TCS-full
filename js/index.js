
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

      request.onerror = (event) =>{ console.log("IndexedDB error: " + event.target.errorCode);};

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
        adicionaNoBanco(maquina);
        deletarDoBanco(maquina);

    }
});
