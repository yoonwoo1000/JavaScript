function validateForm(event) {
    //alert("submit 검증 함수가 호출되었습니다")
    // 기본 기능인 submit 중단 시키기
    event.preventDefault()

    // 에러 메세지 영역 객체 찾기
    let id_obj = document.getElementById("uID_error")
    let pw_obj = document.getElementById("uPW_error")
    // 각 에러 메세지 영역을 미리 초기화 합니다
    id_obj.innerText = ""
    pw_obj.innerText = ""
    uPWC_error.innerText = ""
    uEmail_error.innerText = ""
    // 입력 객체들의 value값을 가져옴
    let uID_str = uID.value
    let uPW_str = uPW.value
    let uPWC_str = uPWC.value
    let uEmail_str = uEmail.value

    // id 유효성 검사 : 8글자 이상[,영문, 숫자]
    if( uID_str.length < 8 ){
        uID_error.innerText = "아이디는 8자 이상이어야 합니다"
        uID.value = ""
        uID.focus()
        return
    }

    // pw 유효성 검사 : 8자 이상
    if( uPW_str.length < 8 ){
        uPW_error.innerText = "비밀번호는 8자 이상이어야 합니다"
        uPW.value = ""
        uPW.focus()
        return
    }

    // pw와 pwc의 일치성 검사
    if( uPW_str != uPWC_str ){
        uPWC_error.innerText = "비밀번호가 일치하지 않습니다"
        uPWC.value = ""
        uPWC.focus()
        return
    }

    // email 유효성 검사
    if( !uEmail_str.includes("@") ){
        uEmail_error.innerText = "올바른 이메일 형식이 아닙니다"
        uEmail.value = ""
        uEmail.focus()
        return
    }

    // -> 모두 통과 했으면 submit 진행
    // 유저에게 회원가입 진행여부를 물어보고 submit를 진행,중단
    // confirm("메세지") -> 유저가 '예' -> true / '아니오' -> false
    let result = confirm("모든 입력값이 정상입니다\n회원가입을 진행하시겠습니까?")
    if( result ) {
        // 유저가 예를 누름
        document.joinForm.submit()
        //event.currentTarget.submit()
    }else{
        // 유저가 아니오를 누름
        return
    }
}

window.onload = function(){
    console.log("문서 로드가 완료되었습니다")
    // form 객체에 이벤트 리스너 연결
    document.joinForm.addEventListener('submit', validateForm)
}