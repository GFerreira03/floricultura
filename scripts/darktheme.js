// Verifica se a preferência do tema está armazenada no LocalStorage
const themePreference = localStorage.getItem('theme');

// Aplica o tema preferido do usuário
if (themePreference === 'dark') {
  document.body.classList.add('dark-theme');
}

// Alterna o tema ao clicar no botão
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function () {
  // Verifica se o tema atual é claro ou escuro
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';

  // Inverte o tema
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Atualiza a classe do body para refletir o novo tema
  document.body.classList.toggle('dark-theme', newTheme === 'dark');
  document.querySelector('.navbar-brand').classList.toggle('dark-theme', newTheme === 'dark')

  // Armazena a preferência do usuário no LocalStorage
  localStorage.setItem('theme', newTheme);
});

