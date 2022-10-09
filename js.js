const buttons = document.querySelector('.buttons')
const valuee = document.getElementById('value')
const span = document.querySelectorAll('span')
const btn = document.querySelector('button')
const sec = document.querySelector('.sec')
const body = document.querySelector('body')
const cal = sec.querySelector('.calculator')

Array.from(span).forEach(e => {
    console.log(e)
    e.addEventListener('click', (tt) => {
        let t = tt.target
        if (t.innerHTML == "=") {
            valuee.innerHTML = eval(valuee.innerHTML)
        } else {
            if (t.innerHTML == "Clear") {
                valuee.innerHTML = "";
            } else {
                valuee.innerHTML += t.innerHTML
            }
        }

    })
})
btn.addEventListener('click', () => {

    body.classList.toggle('dark')
    cal.classList.toggle('dark')
    buttons.classList.toggle('dark')
    sec.classList.toggle('dark')
    btn.classList.toggle('light')
})
