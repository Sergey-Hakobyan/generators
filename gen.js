// function* gen1(start, end){
//     for(let i = start; i<= end;i++){
//         yield
//         console.log(i)
//     }
// }

// const w = gen1(1,8)

// w.next()
// w.next()
// w.next()
// w.next()
// w.next()
// w.next()



// function* idgen(){
//     let id = 1

//     while (true){
//         yield
//         console.log(`id_${id}`)
//         id++
//     }
// }


// const gen2 = idgen()

// gen2.next()
// gen2.next()
// gen2.next()
// gen2.next()
// gen2.next()



// function* fibnum(){
//     let a = 0
//     let b = 1

//     while(true){
//         yield
//         console.log(a+b)
//             let c = b
//             b = a + c
//             a = c
//     }
// }

// const gen3 = fibnum()

// gen3.next()
// gen3.next()
// gen3.next()
// gen3.next()


// function* pag(array, pageSize){
//     let endInd = pageSize
//     let arrStart = 0;
//     while(1){
//         yield
//         console.log(array.slice(arrStart, endInd))
//         arrStart = endInd
//         endInd = pageSize + endInd
//     }
// }


// const arrayy = [1,2,3,4,5,6,8,345,345,6,46,75,67,84,5,35,3,234,4,5]
// const pageSize = 3


// gen4 = pag(arrayy, pageSize)

// gen4.next()
// gen4.next()
// gen4.next()
// gen4.next()
// gen4.next()
// gen4.next()
// gen4.next()
// gen4.next()
// gen4.next()

// function* storeGenerator(initialValue) {
//     let currentValue = initialValue

//     while (true) {
//         let newValue = yield currentValue * 2
//         currentValue = newValue
//     }
// }

// const gen5 = dataPass(5)


// console.log(gen5.next())      
// console.log(gen5.next(10))    
// console.log(gen5.next(7))      
// console.log(gen5.next(100))    