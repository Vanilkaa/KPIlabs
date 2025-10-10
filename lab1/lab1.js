class Customer {
    constructor(customerId, name, email) {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
        this.shoppingCart = new ShoppingCart();
        this.payments = [];
        this.orders = [];
    }
}

class Payment {
    constructor(paymentId, amount, method) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.method = method;
    }
}

class Order {
    constructor(orderId, products, total) {
        this.orderId = orderId;
        this.products = products;
        this.total = total;
    }
}

class ProductCategory {
    constructor(categoryId, name, description) {
        this.categoryId = categoryId;
        this.name = name;
        this.description = description;
        this.products = [];
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
    }
}

class Product {
    constructor(productId, categoryId, name, price, description = '') {
        this.productId = productId;
        this.categoryId = categoryId;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = null;
    }
}