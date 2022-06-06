
// setTimeout(() => {
//     console.log('setTimeout')
// }, 3000)
//
// setInterval(() => {
//     console.log('setInterval')
// }, 1000)

// pending, fulfilled, rejected - состояния (state) промиса

const developer = {
    name: 'Roman',
    isJSDev: true
}

const promise = new Promise((resolve, reject) => {
    if(developer.isJSDev) {
        setTimeout(() => {
            resolve(`${developer.name} является JavaScript разработчиком`)
        }, 3000)
    } else {
        reject(`${developer.name} НЕ является JavaScript разработчиком`)
    }
})

console.log(promise)

// then, catch, finally
promise
    .then((successMessage) => {
        console.log(successMessage)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('finally')
    })