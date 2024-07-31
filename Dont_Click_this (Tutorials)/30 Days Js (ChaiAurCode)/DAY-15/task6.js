const itemManager = (function () {
    let items = [];
  
    return {
      addItem(item) {
        items.push(item);
      },
      removeItem(item) {
        items = items.filter((i) => i !== item);
      },
      listItems() {
        return items;
      },
    };
  })();
  
  console.log(itemManager);
  /*
  {
    addItem: [Function: addItem],
    removeItem: [Function: removeItem],
    listItems: [Function: listItems]
  }
  */
  console.log(itemManager.listItems()); // []
  itemManager.addItem("Apple");
  itemManager.addItem("Banana");
  itemManager.addItem("Mango");
  console.log(itemManager.listItems()); // [ 'Apple', 'Banana', 'Mango' ]
  itemManager.removeItem("Apple");
  console.log(itemManager.listItems()); // [ 'Banana', 'Mango' ]