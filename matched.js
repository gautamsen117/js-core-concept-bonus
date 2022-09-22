const numbers = [12, 34, 45, 65, 67];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id: 1, name: 'xiami phone', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'macbook air', price: 19000},
    {id: 4, name: 'lenevo yoga laptop', price: 19000},
    {id: 5, name: 'Dell inspairation laptop', price: 19000},
    {id: 6, name: 'samsung phone', price: 19000},
    {id: 7, name: 'nokia old phone', price: 19000},
    {id: 7, name: 'Phone one', price: 19000}
];

// for(const product of products){
//     console.log(product);
// }

function matchedProduct(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProduct(products, 'Phone');
console.log(result);