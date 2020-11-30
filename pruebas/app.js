// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes
// No editar
const clients = [
    { id: 1, taxNumber: "86620855", name: "HECTOR ACUÑA BOLAÑOS" },
    { id: 2, taxNumber: "7317855K", name: "JESUS RODRIGUEZ ALVAREZ" },
    { id: 3, taxNumber: "73826497", name: "ANDRES NADAL MOLINA" },
    { id: 4, taxNumber: "88587715", name: "SALVADOR ARNEDO MANRIQUEZ" },
    { id: 5, taxNumber: "94020190", name: "VICTOR MANUEL ROJAS LUCAS" },
    { id: 6, taxNumber: "99804238", name: "MOHAMED FERRE SAMPER" },
  ];
  const accounts = [
    { clientId: 6, bankId: 1, balance: 15000 },
    { clientId: 1, bankId: 3, balance: 18000 },
    { clientId: 5, bankId: 3, balance: 135000 },
    { clientId: 2, bankId: 2, balance: 5600 },
    { clientId: 3, bankId: 1, balance: 23000 },
    { clientId: 5, bankId: 2, balance: 15000 },
    { clientId: 3, bankId: 3, balance: 45900 },
    { clientId: 2, bankId: 3, balance: 19000 },
    { clientId: 4, bankId: 3, balance: 51000 },
    { clientId: 5, bankId: 1, balance: 89000 },
    { clientId: 1, bankId: 2, balance: 1600 },
    { clientId: 5, bankId: 3, balance: 37500 },
    { clientId: 6, bankId: 1, balance: 19200 },
    { clientId: 2, bankId: 3, balance: 10000 },
    { clientId: 3, bankId: 2, balance: 5400 },
    { clientId: 3, bankId: 1, balance: 9000 },
    { clientId: 4, bankId: 3, balance: 13500 },
    { clientId: 2, bankId: 1, balance: 38200 },
    { clientId: 5, bankId: 2, balance: 17000 },
    { clientId: 1, bankId: 3, balance: 1000 },
    { clientId: 5, bankId: 2, balance: 600 },
    { clientId: 6, bankId: 1, balance: 16200 },
    { clientId: 2, bankId: 2, balance: 10000 },
  ];
  const banks = [
    { id: 1, name: "SANTANDER" },
    { id: 2, name: "CHILE" },
    { id: 3, name: "ESTADO" },
  ];
  
  /*
      SECCIÓN PROBLEMAS
        - No promover la copia:
          - No preguntar en StackOverflow, foros, o similares ya que estas preguntas/respuestas quedan disponibles a otros candidatos
          - No subir a repositorios públicos (github, o similares)
          - Otros sitios como codepen o editores de texto on-line (codepen, repl, o similares), dejan guardado el código, por lo que les pedimos tampoco usar editores on-line, la mejor forma de debuggear su código es usando un interprete de javascript como node y ejecutarlo de manera local
          - Para nosotros es fácil detectar pruebas con copia, no pierda su tiempo intentando hacerlo
          - Posteriormente, se evaluará conocimiento en es6 en entrevistas presenciales
        - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
        - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
        - Debe usar nombres explicativos para sus variables.
        - Usar sintaxis ES6.
        - Los resultados son evaluados con un test automatizado, revise que sus retornos sean con la estructura de datos solicitada en cada pregunta.
        - Métodos menos verbosos, DRY, y buenas prácticas en el código mejoran el puntaje final de su prueba
        - Si necesita hacer supuestos que afecten las respuestas entregadas, por favor déjelos escritos en el cuerpo del correo cuando envíe su prueba (No en este archivo). Supuestos que contradigan lo solicitado, no serán considerados como válidos.
        - Su prueba debe ejecutarse sin errores con: node nombre-apellido.js
    */
  
  // 0 Arreglo con los ids de clientes
  function listClientsIds() {
    return clients.map((client) => client.id);
  }
  
  // 1 Arreglo con los ids de clientes ordenados por rut
  function listClientsIdsSortByTaxNumber() {
    // CODE HERE
    clients.sort((a, b) => {
      if (a.taxNumber < b.taxNumber) {
        return -1;
      }
  
      if (a.taxNumber > b.taxNumber) {
        return 1;
      }
  
      return 0;
    });
  
    return clients.map((client) => client.id);
  }
  
  // 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
  function sortClientsTotalBalances() {
    // CODE HERE
    /* Crear un arreglo con el nombre de los clientes y la suma total de sus balances */
    var clientes = [];
    clients.map((client) => {
      var balance = 0;
      accounts.map((account) => {
        if (client.id === account.clientId) {
          balance = balance + account.balance;
        }
      });
      let res = {
        name: client.name,
        balance: balance,
      };
      clientes.push(res);
    });
  
    /* Ordenar el arreglo de mayor a menor respecto de sus balances */
    clientes.sort((a, b) => {
      if (a.balance < b.balance) {
        return 1;
      }
  
      if (a.balance > b.balance) {
        return -1;
      }
  
      return 0;
    });
  
    /* Retornar el arreglo con los nombres */
  
    return clientes.map((cliente) => cliente.name);
  }
  
  // 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
  function banksClientsTaxNumbers() {
    // CODE HERE
    var object = new Object();
    /* Obtener los clientes de los bancos */
    banks.map((bank) => {
      var clientsBank = [];
      var clientsRut = [];
      accounts.map((account) => {
        clients.map((client) => {
          if (bank.id === account.bankId && account.clientId === client.id) {
            clientsBank.push(client);
          }
        });
      });
  
      /* Ordenar los clientes alfabeticamente por nombre */
      clientsBank.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
  
        if (a.name > b.name) {
          return 1;
        }
  
        return 0;
      });
  
      /* Guardar los ruts en un arreglo */
      clientsBank.map((clientBank) => {
        clientsRut.push(clientBank.taxNumber);
      });
  
      object[bank.name] = clientsBank;
    });
  
    return object;
  
    /* Guardar en un objeto como clave el nombre del banco y valor el arreglo de ruts */
  }
  
  // 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
  function richClientsBalances() {
    // CODE HERE
    var saldos = [];
    clients.map((client) => {
      var balance = 0;
      accounts.map((account) => {
        if (account.clientId === client.id && account.bankId === 1) {
          balance = balance + account.balance;
        }
      });
  
      if (balance > 25000) {
        saldos.push(balance);
      }
    });
  
    saldos.sort((a, b) => b - a);
  
    return saldos;
  }
  
  // 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
  function banksRankingByTotalBalance() {
    // CODE HERE
    var bancos = [];
    banks.map((bank) => {
      var saldos = 0;
      accounts.map((account) => {
        if (account.bankId === bank.id) {
          saldos = saldos + account.balance;
        }
      });
  
      let bankSaldo = {
        id: bank.id,
        saldo: saldos,
      };
      bancos.push(bankSaldo);
    });
  
    bancos.sort((a, b) => a.saldo - b.saldo);
  
    return bancos.map((banco) => banco.id);
  }
  
  // 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
  function banksFidelity() {
    // CODE HERE
    var accountsBank = [];
    var object = new Object();
  
    accounts.map((account1) => {
      var contador = 0;
      accounts.map((account2) => {
        if (
          account1.bankId != account2.bankId &&
          account1.clientId === account2.clientId
        ) {
          contador++;
        }
      });
      if (contador === 0) {
        if (accountsBank.length === 0) {
          accountsBank.push(account1);
        } else {
          var ban = 0;
          accountsBank.map((accountBank) => {
            if (account1.clientId === accountBank.clientId) {
              ban++;
            }
          });
          if (ban === 0) {
            accountsBank.push(account1);
          }
        }
      }
    });
  
    /* Contar clientes unicos para cada banco */
    banks.map((bank) => {
      var contador = 0;
      accountsBank.map((account) => {
        if (bank.id === account.bankId) {
          contador++;
        }
      });
      object[bank.name] = contador;
    });
  
    return object;
  }
  
  // 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
  function banksPoorClients() {
    // CODE HERE
    var object = new Object();
    banks.map((bank) => {
      var total = 0;
      var masPobre = null;
      clients.map((client) => {
        var contador = 0;
  
        accounts.map((account) => {
          if (account.clientId === client.id && account.bankId === bank.id) {
            contador = contador + account.balance;
          }
        });
  
        if (contador !== 0) {
          if (total === 0) {
            masPobre = client;
            total = contador;
          } else {
            if (total > contador) {
              masPobre = client;
            }
          }
        }
      });
      object[bank.name] = masPobre.id;
    });
    return object;
  }
  
  // 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado.
  // Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.
  // No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
  function newClientRanking() {
    // CODE HERE
    let newClient = {
      id: clients.length,
      taxNumber: "11111111",
      name: "DIEGO MUÑOZ CARO",
    };
  
    clients.push(newClient);
  
    let newAccount = {
      clientId: newClient.id,
      bankId: 3,
      balance: 9000,
    };
  
    accounts.push(newAccount);
  
    let clientes = sortClientsTotalBalances();
  
    let pos = clientes.indexOf(newClient.name) + 1;
    return pos;
  }
  
  // Impresión de soluciones. No modificar.
  console.log("Pregunta 0");
  console.log(listClientsIds());
  console.log("Pregunta 1");
  console.log(listClientsIdsSortByTaxNumber());
  console.log("Pregunta 2");
  console.log(sortClientsTotalBalances());
  console.log("Pregunta 3");
  console.log(banksClientsTaxNumbers());
  console.log("Pregunta 4");
  console.log(richClientsBalances());
  console.log("Pregunta 5");
  console.log(banksRankingByTotalBalance());
  console.log("Pregunta 6");
  console.log(banksFidelity());
  console.log("Pregunta 7");
  console.log(banksPoorClients());
  console.log("Pregunta 8");
  console.log(newClientRanking());