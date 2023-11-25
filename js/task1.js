let text = document.getElementById('text')
let total = document.getElementById('total')
const findNumber = () => {
    let value = text.value
    let result = value.split(' ')
    let arr = []
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== '') {
            arr.push(result[i])
        }
    }
    
    let lastItem = arr[arr.length - 1]
    console.log(arr.lastIndexOf(lastItem) + 1)
    total.innerText = arr.lastIndexOf(lastItem) + 1
}
