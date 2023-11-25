let text = document.getElementById('text')
let search = document.getElementById('search')
let result = document.getElementById('result')
const Search =() => {
    let search2 = search.value
    let arr1 =[]
    let value = text.value.split(' ')
    for (let i = 0; i < value.length; i++) {
        if(value[i] === search2  ) {
            arr1.push(value[i])
        }
    }
    let word = arr1.filter((item,
        index) => arr1.indexOf(item) === index);
    let filtered_word = word.join(' ')
    if (search2 === filtered_word) {
        result.innerText = word
        result.classList.toggle('green')
    } else {
        result.innerText = `${search2} is not defined`
        result.classList.toggle('red')
    }
     
}