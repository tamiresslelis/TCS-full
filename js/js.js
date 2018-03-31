
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

          var objectStore = event.currentTarget.result.createObjectStore(
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
                    var name = document.getElementById("txtName").value;
                    var email = document.getElementById("txtEmail").value;

                    var transaction = db.transaction("people", "readwrite");
                    var objectStore = transaction.objectStore("people");
                    var request = objectStore.add({ name:name, email: email });
                    request.onsuccess = function (evt) {
                        // do something after the add succeeded
                        console.log("done with insert");
                    };
                }, false);





            }

})
