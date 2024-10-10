async function fetchUserProfile() {
    const response = await fetch('/api/users/profile', {
        method: 'GET',
        credentials: 'include'
    });

    if (response.ok) {
        const userProfile = await response.json();
        document.getElementById('user-name').textContent = userProfile.nome;
        document.getElementById('user-email').textContent = userProfile.email;
        
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('logout-button').style.display = 'block';
    } else if (response.status === 401) {
        // Exibe uma mensagem ou alerta em vez de redirecionar imediatamente
        alert('Você não está autenticado. Clique em "Fazer Login" para acessar.');
        document.getElementById('login-button').style.display = 'block';
        document.getElementById('logout-button').style.display = 'none';
    } else {
        console.error('Erro ao recuperar o perfil:', response.statusText);
    }
}

// Logout function
document.getElementById('logout-button').addEventListener('click', () => {
    fetch('/api/users/logout', {
        method: 'POST',
        credentials: 'include'
    })
    .then(response => {
        if (response.ok) {
            alert('Você foi desconectado.');
            window.location.href = '/';
            console.error('Erro ao realizar logout:', response.statusText);
        }
    });
});

// Lógica do botão de "Fazer Login"
document.getElementById('login-button').addEventListener('click', () => {
    window.location.href = '/auth/loginView.html'; 
});

fetchUserProfile();
