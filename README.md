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
