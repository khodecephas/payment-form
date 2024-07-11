document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    
    // Basic validation
    if (cardNumber === '' || expiryDate === '' || cvv === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields!',
        });
        return;
    }
    
    // Placeholder for additional validation and/or AJAX request
    
    // Simulate a successful payment
    Swal.fire({
        icon: 'success',
        title: 'Payment Successful',
        text: 'Your payment has been processed successfully!',
    });
    
    // Reset the form
    document.getElementById('payment-form').reset();
});
