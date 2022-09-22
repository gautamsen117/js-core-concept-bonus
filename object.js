const nayok = {
    name: 'Shahrukh Khan',
    id: 121,
    address: 'movie cinema',
    isSingale: true,
    friends: ['shrinedhi', 'krithi shetty', 'alia', 'karina', 'katrina'],
    movies: [{name: 'No.1', year: 2020}, {name: 'king khan', year: 2022}],
    act: function(){
        console.log('acting like shahraukh khan')
    },
    car: {
        name: 'tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon mask',
            country: 'USA'
        }
    }
}

// console.log(nayok.car);
console.log(nayok.act);
nayok.act();
