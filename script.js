// const b = [
//     {
//         name: 'mahkam',
//         surname: 'muslimov',
//        addres: {
//         city: 'tashkent',
//         street: 77
//         }
//     }
// ]
// console.log();

// console.log('у меня ' + colors.length + ' элемента');


// for (let i = 0; i < colors.length; i++) {
//     console.log(`zcvx cx`);
// }


// if(colors.length == 1){
//     console.log('у меня один элемент');
// }

// else if(colors.length == 2){
//     console.log('у меня два элемента');
// }

// else if(colors.length == 3){
//     console.log('у меня три элемента');
// }

// else if(colors.length == 4){
//     console.log('у меня четыре элемента');
// }

// else if(colors.length == 5){
//     console.log('у меня пять элементов');
// }


// const colors = ['red', 'green', 'blue', 'pink', 'asc']

// colors.forEach(element => {
//     console.log(element);
    
// })

// console.log(colors.length);

// list.append(fruits[0])

const fruits = ['apple', 'banana', 'orange', 'mango', 'arbuz']

const list = document.querySelector('.list')

fruits.forEach((el, index) => {
    const text = document.createElement('p')
    text.innerText = el
    text.classList.add(`color${index}`)
    list.append(text)
    text.onclick = () => {
        text.innerText = `вы кликнули на ${el}`
    }
})