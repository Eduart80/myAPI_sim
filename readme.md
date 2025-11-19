# Promises and Error Handling Challenge

Application Local API
This is just a represantation of a local API that can be used with server for small busines.<br>
Programming language TypeScript

### Critical Thinking Questions
Why is it important to handle errors
For error handelling we use try/catch block to not let the application crush.<br>
Also on dev perspective we are able to see the error coming, and determine the root couse

### How does using custom error classes improve debugging and error identification?
At many levels we can use the defolt error, 
but at some specific lines we may need more specific onece for us to be more understendable.<br>
Since we created, we now where is coming from.
When might a retry mechanism be more effective than an immediate failure response?

### Functionalities:
Get All:
use the function getProduct(), to retreive all the data in the array.
```js
[
  { id: 1, items: 'Book', total: 250 },
  { id: 2, items: 'Laptop', total: 1200 },
  { id: 3, items: 'Pen', total: 200 }
]
```
Get a productReport(param) by using id, for example : 2
```js
[ { id: 2, items: 'Laptop', total: 1200 } ]
```
Get saleReport(param) by usin items name, "Book":
```js
Book sold: 2, with a price of 24.99
```
