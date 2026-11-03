// JavaScript to show/hide fields based on selected service
const serviceSelect = document.getElementById('service-type');
const transferFields = document.getElementById('transfer-fields');

serviceSelect.addEventListener('change', function() {
    if (this.value === 'transfer') {
        transferFields.style.display = 'block'; 
    } else {
        transferFields.style.display = 'none'; 
    }
});