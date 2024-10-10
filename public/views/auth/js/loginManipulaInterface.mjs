async function manipulaLoginUser(event) {
  event.preventDefault();

  const iptEmail = document.getElementById('user-email');
  const iptPassword = document.getElementById('user-password');

  const object = {
    email: iptEmail.value,
    password: iptPassword.value,
  };

  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();
    alert(data.message);
    window.location.href = '/';
  } else {
    const errorData = await response.json();
    alert(errorData.error);
  }
}

const btEntrar = document.getElementById('bt-entrar');
btEntrar.addEventListener('click', manipulaLoginUser);
