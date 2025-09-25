 function toggleAll(object) {
    let checkboxs = document.getElementsByName('terms')

    for (let box of checkboxs) {

        box.checked = object.checked
    }
}

function checkBoxs() {
    let checkboxs = document.getElementsByName('terms')

    let allChecked = true

    for (let box of checkBoxs)
        if (box.checked != true) {
            allChecked = false
            break
        }

    checked_all.checked = allChecked
}

function Test(){
    alert('Test method')
}

window.onload = function(){
    checked_all.addEventListener('change', function(){
        alert('Event!')
    })
}