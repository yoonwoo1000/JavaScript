window.onload = function(){
    let btn = document.getElementById("myBTN")

        btn.addEventListener('click', function () {
            this.innerText = "Click"
            this.style.backgroundColor = "blue"
        })
        btn.addEventListener('mouseenter', function () { this.style.border = '2px solid purple'; })
        btn.addEventListener('mouseleave', function () { this.style.border = '1px solid black'; })

}
