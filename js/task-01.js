const logItems = (array) => {
  array.forEach((element, index) =>
    console.log(`[${element}] - [${index + 1}]`)
  );
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
