const btn = document.getElementById('calculateBtn')
const result = document.getElementById('result')


function calculateAge(bday) {
    let today = new Date()
    let birthDay = new Date(document.getElementById('birthday').value)
    let age = today.getFullYear() - birthDay.getFullYear()
    let month = today.getMonth() - birthDay.getMonth()
    if(month < 0 || (month === 0 && today.getDate() < birthDay.getDate())) {
        age--
    }
    result.textContent = `You're ${age} years old!`
}

btn.addEventListener('click', calculateAge)