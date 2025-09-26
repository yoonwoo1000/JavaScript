window.onload = function(){
    // id가 myBTN인 객체 찾기
    let btn = document.getElementById("myBTN")
    
    // 찾은 객체에 'click' 이벤트 리스너 등록
    btn.addEventListener('click',function(event){
        // this 키워드는 btn
        this.innerText='클릭';
        this.style.backgroundColor='yellow';
        console.log(this)
        // event : 발생한 이벤트에 대한 내용
        // event.currentTarget : 발생한 이벤트의 대상객체
        console.log(event.currentTarget)
    })
    btn.addEventListener('mouseenter',function(){
        this.style.border='2px solid blue';
    })
    btn.addEventListener('mouseleave',function(){
        this.style.border='1px solid black';
    })
}