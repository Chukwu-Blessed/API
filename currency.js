'use strict'

// 2. Next create an API for a currency app
// https://api.coindesk.com/v1/bpi/currentprice.json
// Let the fetch function go to the API every 5 seconds, get the currency exchange and append the important details to the html
// Do this inside a new file called currency.html

const getCurrency = document.querySelector('.curr');
setTimeout(() => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
      // console.log(data.bpi);
      for(const [_, value] of Object.entries(data.bpi)) {
        // console.log(`${value.code}`)
        const html = `
          <h1>Currency: ${value.code}  _Rate: ${value.rate} </h1>
        `
        getCurrency.insertAdjacentHTML('afterend', html);
      }
    })
    .catch(err => console.error(err))
}, 0);



const getAllCurrency = async function() {
  try{
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await response.json();
    console.log(data)
    for(const [_, value] of Object.entries(data.bpi)) {
      const html = `
        <h1>Currency: ${value.code}  _Rate: ${value.rate} </h1>
      `
      getCurrency.insertAdjacentHTML('afterend', html);
    }
  }catch(e) {
    console.error(e)
  }
}

getAllCurrency();