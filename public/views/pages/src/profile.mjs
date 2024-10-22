async function fetchUserProfile() {
    document.getElementById('loading-spinner').style.display = 'block'; 
    
    try {
        const response = await fetch('/api/users/profile', {
            method: 'GET',
            credentials: 'include'
        });

        document.getElementById('loading-spinner').style.display = 'none';

        if (response.ok) {
            const userProfile = await response.json();
            document.getElementById('user-name').textContent = userProfile.nome;
            document.getElementById('user-email').textContent = userProfile.email;
            
            document.getElementById('login-button').style.display = 'none';
            document.getElementById('logout-button').style.display = 'block';
        } else if (response.status === 401) {
            document.getElementById('auth-message').textContent = 'Por favor, faça login para acessar seu perfil.';
            document.getElementById('login-button').style.display = 'block';
            document.getElementById('logout-button').style.display = 'none';
        } else {
            console.error('Erro ao recuperar o perfil:', response.statusText);
        }
    } catch (error) {
        document.getElementById('loading-spinner').style.display = 'none'; 
        console.error('Erro ao recuperar o perfil:', error);
        document.getElementById('auth-message').textContent = 'Erro ao carregar o perfil. Tente novamente mais tarde.';
    }
}



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


document.getElementById('login-button').addEventListener('click', () => {
    window.location.href = '/auth/loginView.html'; 
});

fetchUserProfile();
