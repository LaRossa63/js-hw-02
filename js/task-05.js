const checkForSpam = (message) => {
  const text = message.toLocaleLowerCase();

  return text.includes('spam') || text.includes('sale');
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
