window.onload = function() {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let money = document.querySelectorAll(`.money`)

    money.forEach(function(v,n) {
        v.innerHTML = numberWithCommas(v.innerHTML);
    })
}