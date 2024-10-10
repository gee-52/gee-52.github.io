window.onload = function () {
    document.getElementById("for").addEventListener("submit", function (fun) {
        fun.preventDefault();
        let amount = document.getElementById("amount").value;
        let zakazik = document.getElementById("zakazik");
        let elementprice = zakazik.options[zakazik.selectedIndex];
        let price = elementprice.getAttribute("Price");
        if (/^\d+$/.test(amount) && amount >= 0) {
            amount = Number(amount);
            document.getElementById("result").innerHTML = amount * price + "руб";
        } else {
            document.getElementById("result").innerHTML = "а колво товаров?";
        }
    });
};
  
