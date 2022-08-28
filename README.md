# API

### An Assignment on API

THis is a simple fetch API function that fetch Data from the below url every 5 seconds.

```
https://api.coindesk.com/v1/bpi/currentprice.json
```

This fetch function goes to the API url every 5 seconds and gets the currency pair, and the exchange rate for the corresponding currency pair, then appens the returned data to the HTML file, which is then displayed on the Browser

## Extra
For this particular Assignment, two method was used to achieve the same result.

* The first method was to use the fetch() and then() method which returns a promise and then such promises will be consumed with by the then() method and the data required is returned

### Syntax
```
fetch('url')
    .then(response => response.json())
    .then(data => {
        console.lod(data)
    })
    .catch(err => console.error(err));
```

* The second method is the most resent API fetching method in JavaScript which includes using the async / await method. This method is based on Asynchronoous JavaScript, whereby the fetch is done at the backround of the JavaScript runtime, and does not affect the execution of any code that comes after it (i.e Non-Blocking code).

### Syntax
```
const getAllCurrency = async function() {
  try{
    const response = await fetch('url');
    const data = await response.json();
    console.log(data);
  }catch(error) {
    console.error(error)
  }
}

getAllCurrency();
```
