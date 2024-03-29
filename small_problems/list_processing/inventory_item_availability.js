function transactionsFor(itemId, transactions) {
  return transactions.filter(function(obj) {
    return obj['id'] === itemId;
  });
}

function isItemAvailable(itemId, transactions) {
  let filteredItem = transactionsFor(itemId, transactions);
  let inMovement = 0;
  let outMovement = 0;

  filteredItem.forEach(function(transaction) {
    if (transaction.movement === 'in') {
      inMovement += transaction.quantity;
    } else if (transaction.movement === 'out') {
      outMovement += transaction.quantity;
    }
  });

  let result = inMovement - outMovement;
  return result < 0 ? false : true;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
// [
//   { id: 101, movement: 'in', quantity: 5 },
//   { id: 101, movement: 'in', quantity: 12 },
//   { id: 101, movement: 'out', quantity: 18 }
// ]
isItemAvailable(105, transactions);     // true


// function transactionsFor(itemId, list) {
  return list.filter((object, index) => {
    return object.id === itemId;
  });
}



function isItemAvailable(itemId, list) {
  let invetoryItemObject = transactionsFor(itemId, list);
  
  let availability = invetoryItemObject.reduce((availability, item) => {
    if (item.movement === 'in') {
      availability += item.quantity;
    } else if (item.movement === 'out') {
      availability -= item.quantity;
    }
    return availability
  }, 0);
  
//   let availability =  movementIn - movementOut;
  
  return availability < 0 ? false : true;
}



const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true