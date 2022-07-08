function emailValidation() {
  const form = document.getElementById('form');
  const contact3 = document.getElementById('contact3');
  let error_line = document.createElement('tr');
  error_line.textContent = 'Eメールが一致しません';
  error_line.classList.add('alert_color');
  contact3.setAttribute('id', 'alert');
  email_confirm.addEventListener('input', e => {
      e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {
        if((document.getElementById('alert'))){
          contact3.after(error_line);
          email_confirm.classList.add("alert_bg");
        }
      } else {
        email_confirm.classList.remove("alert_bg");
        contact3.parentNode.removeChild(error_line);
      }
    });
  };
  
  window.onchange = emailValidation;


