let bill_input = document.querySelector('.bill-input');
let percents = document.querySelectorAll('.percent');
let people = document.querySelector('.number-of-people');
let custom = document.querySelector('.custom');
let tip_amount = document.querySelector('.l-amount');
let total_amount = document.querySelector('.t-amount');
const reset = document.querySelector('.reset-button');




percents.forEach((i)=>{i.addEventListener('click',()=>{
    let initial_input = Number.parseFloat(bill_input.value)
    console.log(initial_input)
    let updated_bill = 1 + (Number.parseFloat(i.textContent)*0.01)
    let new_bill = (updated_bill* Number.parseFloat(bill_input.value)).toFixed(2);

    if(Number(people.value) != (0 || 'NAN')){

        tip_amount.textContent = `$${((Number.parseFloat(new_bill)-Number.parseFloat(bill_input.value))/Number(people.value)).toFixed(2)}`
        total_amount.textContent = `$${(bill_input.value / Number(people.value)).toFixed(2)}`

    }

   
})})

custom.addEventListener('input',()=>{
    x = 1 + (Number.parseFloat(custom.value)*0.01)
    let new_bill = x * Number.parseFloat(bill_input.value)

    console.log(typeof new_bill)
    if(Number(people.value) != (0 || 'NAN')){

        tip_amount.textContent = `$${((Number.parseFloat(new_bill)-Number.parseFloat(bill_input.value))/Number(people.value)).toFixed(2)}`
        total_amount.textContent = `$${(Number(new_bill) / Number(people.value)).toFixed(2)}`

    }



})


reset.addEventListener('click',()=>{
    bill_input.value = '';
    people.value = '';
    custom.value = '';
    tip_amount.textContent = '$0.00'
    total_amount.textContent = '$0.00'
})

