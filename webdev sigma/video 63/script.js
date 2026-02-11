arr = [1, 13, 5, 7, 9,]
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//  newarr.push(element**2)   
// }
let newarr = arr.map(e => {
    return e ** 2
})
console.log(newarr)


const greaterthanSeven = (e)        => {
    if (e>7) {
        
        return true
    }
    return false
}
console.log(newarr.filter(greaterthanSeven))