function handleGetFormData() {
    const nameInput = document.getElementById('name');
    const cityInput = document.getElementById('city');
    const emailInput = document.getElementById('email');
    const zipCodeInput = document.getElementById('zip-code');
    const statusInput = document.getElementById('status');

    return {
        name: nameInput.value,
        city: cityInput.value,
        email: emailInput.value,
        zipCode: zipCodeInput.value,
        status: statusInput.checked
    };
}
function isNumber(str) {
    return !isNaN(str);
}

function checkboxIsChecked() {
    const statusInput = document.getElementById('status');
    return statusInput.checked;
}

function validateFormData(formData) {
    return formData !== null &&
           isNumber(formData.zipCode) &&
           checkboxIsChecked();
}

function submit() {
  const formData = handleGetFormData();

  // Mendapatkan elemen dengan id 'warning'

  const warningDiv = document.getElementById('warning');

  // Jika isValid adalah false, tampilkan pesan peringatan

  if (validateFormData(formData) == false) {
    return (warningDiv.textContent = 'Periksa form anda sekali lagi');
  } else {
    return warningDiv.textContent='';
  }
}
  document.getElementById('submit-form').addEventListener('click',(event)=> {
    event.preventDefault();
    submit();
  });
