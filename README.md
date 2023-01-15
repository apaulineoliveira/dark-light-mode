# 🚩Objetivo
<p>O intuito desse projeto foi criar um botão que mudasse o tema da página para modo escuro ou retornasse para o modo claro. Para isso utilizei HTML, CSS puro e Javascript. Implementei no projeto a API LocalStorage para armazenar o tema favorito do usuário para que quando o usuário retornar a página o tema favorito permaneça na página. O script verificará no localstorage se o tema armazenado é o escuro e o aplicará ao body assim que o mesmo for carregado.</p>
<h3>Sobre o CSS</h3>
<ul>
<li>Utilizei variáveis CSS para facilitar a manutenção e estruturação dos estilos da página. Sendo atribuídas variáveis para o tema claro e escuro.</li>
<li>No botão “refresh” que atribuí como o responsável por armazenar as informações contidas no <b>localstorage</b> estilizei com <b>display:none</b> para que o mesmo fique invisível na página.</li>
<li>Utilizei o <b>~</b> para determinar as posições dos slides quando os mesmos estiverem selecionados (checked) proporcionando a ordem visual correta do carrousel.</li>
</ul>

<h3>Sobre o Javascript</h3>

<li>Para o processo de alteração do tema ao apertar o botão, criei um evento com o javascript com eventListener para quando o botão seja clicado a alteração do tema seja aplicado ao body, removendo ou adicionando a classe .dark e também fazendo a alteração do tema armazenado no localstorage dependendo do contexto.</li>

<br></br>

# 🚩Objective
<p>The goal of this project was to create a button that would change the theme of the page to dark mode or back to light mode. For this I used HTML, pure CSS and Javascript. I implemented the LocalStorage API in the project to store the user's favorite theme so that when the user returns to the page, the favorite theme remains on the page. The script will check localstorage if the stored theme is dark and apply it to the body once it is loaded.</p>
<h3>About CSS</h3>
<ul>
<li>I used CSS variables to facilitate maintenance and structuring of page styles. Variables being assigned for light and dark theme.</li>
<li>In the “refresh” button that I assigned as responsible for storing the information contained in the <b>localstorage</b> I styled it with <b>display:none</b> so that it becomes invisible on the page.</b></li>
<li>I used to determine the positions of the slides when they are selected (checked) providing the correct visual order of the carrousel.</li>
</ul>

<h3>About Javascript</h3>

<li>For the process of changing the theme when pressing the button, I created an event with javascript with eventListener so that when the button is clicked, the theme change is applied to the body, removing or adding the .dark class and also making the change of the theme stored in localstorage depending on the context.</li>
