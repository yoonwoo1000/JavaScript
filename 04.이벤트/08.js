function toggleAll(event){
    let checkboxs = document.getElementsByName('terms')
    for( let box of checkboxs ){
        box.checked = event.currentTarget.checked
    }
}
function CheckBoxs(){
    let checkboxs = document.getElementsByName('terms')
    let allChecked = true
    for( let box of checkboxs) {
        if( !box.checked ){
            allChecked = false
            break
        }
    }
    check_all.checked = allChecked
}
function Test(event){
    // 이벤트 리스너에 등록되는 함수는 기본적으로 event를 전달 받음
    //alert("Test()함수가 호출되었습니다")
    console.log(event.currentTarget)
}
window.onload = function(){
    // 객체.addEventListener('change', 함수)
    //check_all.addEventListener('change', Test)
    check_all.addEventListener('change', toggleAll)

    // 개별 체크 박스들을 한번에 모두 찾음
    let checkboxs = document.getElementsByName('terms')
    for( let box of checkboxs) {
        // 개별 체크 박스에 이벤트 리스너 등록
        box.addEventListener('change', CheckBoxs)
    }
}
/*
    document.getElementsByName('terms').forEach(function(box){ box.addEventListener('change', CheckBoxs) })
    document.getElementsByName('terms').forEach((box)=>{ box.addEventListener('change', CheckBoxs)})
    document.getElementsByName('terms').forEach( box => box.addEventListener('change', CheckBoxs) )
 */
