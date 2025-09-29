function toggleAll(){
    let checkboxs = $('[name=terms]')   // 모든 개별 체크박스 찾기
    let flag = $(this).prop('checked')  // 이벤트가 발생한 객체의 checked 속성값
    checkboxs.prop('checked', flag)     // 개별 체크박스 checked 상태 일괄 갱신
    //$('[name=terms]').prop('checked', $(this).prop('checked'))
}
function CheckBoxs(){
    let obj = $("#check_all")           // '모두 체크' 박스 찾기
    const allCount = $('[name=terms]').length           // 개별 박스 개수
    const checkCount = $('[name=terms]:checked').length // 체크된 개별 박스 개수
    obj.prop('checked', allCount == checkCount)
    //$("#check_all").prop('checked', $('[name=terms]').length == $('[name=terms]:checked').length)
}
/* 문서의 로드가 다 끝나고 준비가 되었는지 확인하는 jquery 함수
// window.onload = function(){ ... }
// $(document).ready()
// $(document).ready(함수)
// $(document).ready(function(){})  */
$(document).ready(function(){
    /* let obj = $("#check_all")
    //console.log(obj)
    // checked : 상태 : 동적 : 속성 X
    //console.log(obj.attr('checked'))
    // checked 상태 / disabled 상태 등의
    // true/false 값을 가져오는 함수
    //console.log(obj.prop('checked')) */
    $("#check_all").on('change', toggleAll)  // '모두 선택' 박스에 이벤트 연결
    $('[name=terms]').on('change',CheckBoxs) // 개별 선택박스에 이벤트 일괄연결
})