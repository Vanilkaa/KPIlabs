### Use Cases

- **UC1**  View Products
- **UC2**  Make an Order
- **UC3** Make a Payment
- **UC5**  Modify Shopping Cart
- **UC6**  View Product Categories
- **UC7**  Change Products
- **UC8**  Change Product Price
- **UC9**  Change Product Description
- **UC10** View Orders
- **UC11** View Payments
- **UC12** Change Product Categories

### Functional Requirements

- **REQ1** Customer should be able to view products
- **REQ2** Customer should be able to view product categories
- **REQ3** Customer should be able to view their Shopping Cart
- **REQ4** Customer should be able to change their Shopping Cart
- **REQ5** Customer should be able to create an Order
- **REQ6** Customer should make a payment when making an Order
- **REQ7** Seller should be abel to change Products
- **REQ8** Seller should be abel to change Products prices
- **REQ16** Seller should be abel to change Products Categories
- **REQ9** Seller should be able to view customers orders and payments

### Non Functional Requirements

- **REQ10** All payments data should be encrypted
- **REQ11** Products page should load within 2 seconds
- **REQ12** Website should stay up 24/7
- **REQ13** System should support at least 1000 concurrent users
- **REQ14** If the item in customers shopping cart goes out of stock, customer should be notified
- **REQ15** Products and Categories pages should be responsive and render on both mobile and desktop devices

### Requirements Traceability Matrix

|REQ/UC|UC1|UC2|UC3|UC4|UC5|UC6|UC7|UC8|UC9|UC10|UC11|UC12|
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
|REQ1|**X**|||||||||||
|REQ2||||||**X**|||||||
|REQ3||||**X**|||||||||
|REQ4|||||**X**||||||||
|REQ5||**X**|||||||||||
|REQ6||**X**|**X**||||||||||
|REQ7|**X**||||||**X**||**X**||||
|REQ8||||||||**X**|||||
|REQ9||||||||||**X**|**X**||
|REQ16||||||||||||**X**|