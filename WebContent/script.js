	var items = ["Apples", "Pears","Strawberry", "Oranges",];
	var price = ["2.20", "1.50", "4.50", "5.25"];
	
	var itemsCart=[];
	var priceCart=[];

function addItem(items, price){
	itemsCart.push(items);
	priceCart.push(price);
	
	var cartEl = document.getElementById("finalItems");
	cartEl.insertAdjacentHTML("afterend", "<p>"+ items+price+"</p>");
}

function calcTotals() {
	var grandTotal = 0;
	for (i = 0; i < priceCart.length; i++) {
		grandTotal = grandTotal + priceCart[i];
	}
		var totalEl = document.getElementById("cartTotal");
		totalEl.textContent = ("$" + Number(grandTotal).toFixed(2));
}
