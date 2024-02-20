function orderFood(foodName, rate, quantityInput) {
    if (!quantityInput || !quantityInput.value) {
        alert('Error: Quantity input element not found for ' + foodName);
        return;
    }

    var quantity = quantityInput.value.trim();

    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity for ' + foodName);
        return;
    }

    var total = (quantity * rate);
    var gst = (total * 0.18);
    var total_gst = (total + gst);
    alert('Thank you for your order.' + ' You have ordered ' + quantity + ' ' + foodName + '(s) at a rate of ₹' + rate + ' each. Total: ₹' + total_gst + ' (inclusive of 18% gst.)');
    window.location.reload();
}
function showMenu(){
    document.getElementById('menu').style.display='block';
}