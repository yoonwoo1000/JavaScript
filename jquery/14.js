function validateForm(event) {
    // 기본 기능인 submit 중단 시키기
    event.preventDefault()

    // JS의 submit() 함수의 역할
    // 명시적으로 submit를 진행
    // document.joinForm.submit()

    // jQuery의 submit()
    // submit 이벤트를 발생
    // $(this).submit()
    // alert("validateForm가 호출되었습니다")

    // 각 에러 메세지 영역을 미리 초기화 합니다
    $('#uID_error').text("")
    $('#uPW_error').text("")
    $('#uPWC_error').text("")
    $('#uEmail_error').text("")
    // 입력 객체들의 value값을 가져옴
    let uID_str = $('#uID').val()
    let uPW_str = $('#uPW').val()
    let uPWC_str = $('#uPWC').val()
    let uEmail_str = $('#uEmail').val()
    // id 유효성 검사 : 8글자 이상[,영문, 숫자]
    if( uID_str.length < 8 ){
        $('#uID_error').text("아이디는 8자 이상이어야 합니다")
        $('#uID').val("")
        $('#uID').focus()
        return
    }

    // pw 유효성 검사 : 8자 이상
    if( uPW_str.length < 8 ){
        $('#uPW_error').text("비밀번호는 8자 이상이어야 합니다")
        $('#uPW').val("")
        $('#uPW').focus()
        return
    }

    // pw와 pwc의 일치성 검사
    if( uPW_str != uPWC_str ){
        $('#uPWC_error').text("비밀번호가 일치하지 않습니다")
        $('#uPWC').val("")
        $('#uPWC').focus()
        return
    }

    // email 유효성 검사
    if( !uEmail_str.includes("@") ){
        $('#uEmail_error').text("올바른 이메일 형식이 아닙니다")
        $('#uEmail').val("")
        $('#uEmail').focus()
        return
    }

    // -> 모두 통과 했으면 submit 진행
    // 유저에게 회원가입 진행여부를 물어보고 submit를 진행,중단
    // confirm("메세지") -> 유저가 '예' -> true / '아니오' -> false
    let result = confirm("모든 입력값이 정상입니다\n회원가입을 진행하시겠습니까?")
    if( result ) {
        // 유저가 예를 누름
        // document.joinForm.submit()
        // event.currentTarget.submit()
        // jq객체.submit() -> submit 이벤트 발생
        // 해당 이벤트 리스너가, validateForm 함수를 호출
        // $(this).submit() : 무한 루프에 빠집니다
        // 이벤트 리스너 제거
        $(this).off('submit')
        $(this).submit()
    }else{
        // 유저가 아니오를 누름
        return
    }
}

$(document).ready(function(){
    console.log("문서 로드가 완료되었습니다")
    // form 객체에 이벤트 리스너 연결
    $('form[name=joinForm]').on('submit',validateForm)
})