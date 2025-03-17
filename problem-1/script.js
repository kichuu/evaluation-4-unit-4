const products = [
    {"name": "Apple", "price": 0.99, "category": "Fruit"},
    {"name": "Bread", "price": 2.49, "category": "Bakery"},
    {"name": "Milk", "price": 3.99, "category": "Dairy"},
    {"name": "Cheese", "price": 4.99, "category": "Dairy"},
    {"name": "Banana", "price": 0.79, "category": "Fruit"},
    {"name": "Yogurt", "price": 1.99, "category": "Dairy"}
]

function sortedList(products , category){
    let newarr = []
    products = products.filter(product=>product.category == category)
    products.sort((a,b) => a.price - b.price )
    products.forEach(product => {
        newarr.push(product.name)
    });
    return newarr
}
let finalarr = sortedList(products, "Dairy")
console.log(finalarr)
