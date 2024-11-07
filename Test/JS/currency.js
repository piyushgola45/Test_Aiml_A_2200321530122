let currency = {};

const convert = () => {
    const from = document.getElementById('one').value;
    const to = document.getElementById('two').value;
    const amount = document.getElementById('amount').value;
    const result = (amount * currency[to]) / currency[from];
    document.getElementById('convert').value = result;
}

fetch('https://api.exchangerate-api.com/v4/latest/USD')
.then(response => response.json())
.then(data => {
    currency = data.rates;
    const currencyKeys = Object.keys(currency);
    currencyKeys.forEach((key) => {
        const optionFrom = document.createElement('option');
        optionFrom.value = key;
        optionFrom.innerText = key;
        document.getElementById('one').appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = key;
        optionTo.innerText = key;
        document.getElementById('two').appendChild(optionTo);
    });
})
.catch(error => {
    console.error('Error fetching the exchange rates:', error);
});