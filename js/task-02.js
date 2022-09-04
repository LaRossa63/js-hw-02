const calculateEngravingPrice = (message, pricePerWord) => {
  const length = message.split(' ').length;
  const totalPrice = pricePerWord * length;

  return `За ${length} слов. К оплате: ${totalPrice}`;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10
  )
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20
  )
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
);
