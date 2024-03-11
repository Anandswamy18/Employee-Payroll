const cancel=document.getElementById('cancel')
cancel.addEventListener('click',()=>{
    window.location.href=('http://127.0.0.1:5500/employee_dshboard.html')
    
})
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('employeedata');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let existingData = JSON.parse(localStorage.getItem('employeeData'));

        
        if (!Array.isArray(existingData) || existingData === null) {
            existingData = []; 
        }

        const formData = {
            name: document.getElementById('name').value,
            profileImage: document.querySelector('input[name="profileImage"]:checked').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            department: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value),
            salary: document.getElementById('select').value,
            date: document.getElementById('day').value + '-' + document.getElementById('month').value + '-' + document.getElementById('year').value,
            note: document.getElementById('noteText').value
        };

        existingData.push(formData);

        localStorage.setItem('employeeData', JSON.stringify(existingData));

        form.reset();
    });
});

