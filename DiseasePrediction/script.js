function showForm(disease) {
    document.getElementById('diabetes-form').style.display = 'none';
    document.getElementById('heart-form').style.display = 'none';
    document.getElementById('parkinsons-form').style.display = 'none';
    document.getElementById(disease + '-form').style.display = 'block';
}

function predict(disease) {
    const formData = {};
    document.querySelectorAll(`#${disease}-form input`).forEach(input => {
        formData[input.id] = input.value;
    });
    
    let result = "Low Risk";
    if (Math.random() > 0.5) {
        result = "High Risk";
    }
    document.getElementById(disease + '-result').innerText = `Prediction: ${result}`;
}
