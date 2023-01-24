

# 5° Projeto Driven Education Bootcamp

### Você pode acessar a aplicação neste link:
  ### - <a href="https://filipetenedini.github.io/p5-Driven-batepapoUol/"> Bate Papo Uol </a>
<br><br><br>
<p align="center">
  |&nbsp;&nbsp;&nbsp<a href="#Projeto">Projeto</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#avaliacao">Avaliação da Driven do meu Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;
</p>
<br><br>

![image](https://user-images.githubusercontent.com/105571583/214379174-b04b5645-f66b-465e-b10b-42aaedc0687b.png)


<h1 id="Projeto"> 💻 Projeto</h1>

<h3>- Requisitos passados </h3>
<p align="center">
  |&nbsp;&nbsp;&nbsp;<a href="#API">API</a>&nbsp;&nbsp;&nbsp;|
</p>
<details>
<summary>    
- Geral
</summary>

- [ ]  Não utilize nenhuma biblioteca para implementar este projeto (jquery, lodash, react, etc), nem outras linguagens que compilem para JavaScript (TypeScript, Clojure, ELM, etc), somente JavaScript puro.
- [ ]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público.
- [ ]  A cada requisito implementado faça um *commit* com uma mensagem descritiva do que você evoluiu.
  
 </details>
 
<details>
<summary>    
- Layout
</summary>

  - [ ]  Aplicar layout para mobile, seguindo o Figma. Não é necessário implementar uma versão para desktop.
 
 </details>
 
 <details>
<summary>    
- Chat
</summary>

- [ ]  Ao entrar na sala, este deve carregar as mensagens do servidor quando o usuário estiver logado e exibi-las conforme *layout* fornecido.
- [ ]  Existem três tipos de mensagem:
    - Mensagens de status (**Entrou** ou **Saiu** da sala): deve ter o fundo cinza;
    - Mensagens reservadas (**Reservadamente**): deve ter o fundo rosa;
    - Mensagens normais: devem ter o fundo branco.
- [ ]  A cada três segundos o site deve recarregar as mensagens do servidor para manter sempre atualizado.
- [ ]  O *chat* deverá ter rolagem automática por padrão, ou seja, sempre que novas mensagens forem adicionadas ao final do *chat* ele deve *scrollar* para o final.
- [ ]  As mensagens com **Reservadamente** só devem ser exibidas se o nome do destinatário ou remetente for igual ao nome do usuário que está usando o chat (ou senão ele poderia ver as mensagens reservadas para outras pessoas)
    - **⚠️ Atenção:** Fazer essa filtragem no *front-end* não é uma boa prática, o ideal seria o servidor não fornecer essas mensagens para outras pessoas. Entretanto, manteremos dessa forma por fins didáticos. Combinado?
</details>

<details>
<summary>
Entrada na Sala
</summary

- [ ]  Ao entrar no site, o usuário deverá ser perguntado com um `prompt` ****seu lindo nome.
- [ ]  Após inserção do nome, este deve ser enviado para o servidor pra cadastrar o usuário:
    - Caso o servidor responda com sucesso, o usuário poderá entrar na sala;
    - Caso o servidor responda com erro, deve-se pedir para o usuário digitar outro nome, pois este já está em uso;
- [ ]  Enquanto o usuário estiver na sala, a cada 5 segundos o site deve avisar ao servidor que o usuário ainda está presente, ou senão será considerado que "Saiu da sala".
 
 </details>
 
 <details>
 <summary>
Envio de Mensagens
 </summary>
 
- [ ]  Ao enviar uma mensagem, esta deve ser enviada para o servidor:
    - Caso o servidor responda com sucesso, você deve obter novamente as mensagens do servidor e atualizar o *chat;*
    - Caso o servidor responda com erro, significa que esse usuário não está mais na sala e a página deve ser atualizada (e com isso voltando pra etapa de pedir o nome).
- [ ]  Nesse envio, deve ser informado o remetente, o destinatário e se a mensagem é reservada ou não.
    - Escolher um destinatário e se a mensagem é reservada ou pública é um requisito bônus (ver abaixo). Logo, se você não implementar o bônus, sempre envie destinatário como Todos e a mensagem como pública.
 </details>  

<details>
<summary>    
Bônus (opcional)
</summary>

<details>
<summary>    
Envio com enter
</summary>

- [ ]  Faça com que, caso o usuário tecle Enter no campo de mensagem, ela seja enviada (ou seja, deve ter o mesmo comportamento caso o usuário clique no botão de envio).

 </details>

<details>
<summary>    
Tela de Entrada
</summary>

- [ ]  Em vez de um prompt, faça uma tela inicial.

</details>
  
 <details>
<summary>    
Participantes ativos
</summary>

- [ ]  Ao clicar no ícone superior direito de participantes, o menu lateral deve abrir por cima do chat conforme *layout*. Um fundo escuro semi-transparente deve ficar por cima do *chat*.
- [ ]  Ao clicar no fundo escuro, o menu lateral deve ser ocultado novamente.
- [ ]  O site deve obter a lista de participantes assim que entra no chat e deve atualizar a lista a cada dez segundos.
- [ ]  Ao clicar em uma pessoa ou em público/reservadamente, a opção clicada deve ser marcada com um *check* e as demais desmarcadas.
- [ ]  Além do check acima, ao trocar esses parâmetros também deve ser alterada a frase que informa o destinatário, que fica embaixo do input de mensagem.

</details>
  
</details>
  
 <h2 id="API"> 💻 Projeto - API </h2>

   <details>
<summary>    
Entrar na sala
</summary>

- Para entrar na sala, deve-se enviar ao servidor o nome do usuário. Para isso, envie uma requisição `POST` para a URL:
    
    ```jsx
    https://mock-api.driven.com.br/api/v6/uol/participants
    ```
    
- Enviando um objeto no formato:
    
    ```jsx
    {
      name: "João"
    }
    ```
    
- O servidor pode responder com status `400` se já houver um usuário online com esse nome. Se for o caso, a aplicação deve pedir um novo nome até que o servidor responda com status `200`.

</details>

<details>
<summary>    
Manter conexão
</summary>

- O servidor precisa saber que o usuário continua online. Se o usuário não envia nenhuma mensagem, como ele pode inferir se o usuário continua ou não na página?
- Para resolver isso, o servidor espera que seu sistema avise continuamente que o usuário permanece utilizando o chat. Para isso, o sistema deve enviar uma requisição `POST` para a URL:
    
    ```jsx
    https://mock-api.driven.com.br/api/v6/uol/status
    ```
    
- Enviando um objeto no formato enviando o nome do usuário que foi pedido ao entrar na página.
    
    ```jsx
    {
      name: "João"
    }
    ```
    
- Esta requisição deve ser feita a cada cinco segundos.

</details>
 <details>
<summary>    
Buscar mensagens
</summary>

- Para buscar mensagens do servidor, mande uma requisição `GET` para a URL:
    
    ```jsx
    https://mock-api.driven.com.br/api/v6/uol/messages
    ```
    
- A resposta será um array de objetos, como o seguinte:
    
```jsx
[
  {
    from: "João",
    to: "Todos",
    text: "entra na sala...",
    type: "status",
    time: "08:01:17"
  },
  {
    from: "João",
    to: "Todos",
    text: "Bom dia",
    type: "message",
    time: "08:02:50"
  },
]
```
    
- Nos objetos, o campo `type` identifica o tipo da mensagem. Existem os seguintes valores:
    - `status`: mensagem de estado, como entrou ou saiu da sala;
    - `message`: mensagem pública;
    - `private_message`: mensagem particular.

</details>
  
<details>
<summary>    
Enviar mensagens
</summary>
  
- Para enviar mensagens, você deve fazer uma requisição `POST` para a URL:
    
    ```jsx
    https://mock-api.driven.com.br/api/v6/uol/messages
    ```
  
- Nesta requisição, você deve enviar um objeto como o seguinte:
  
  ```jsx
  {
	from: "nome do usuário",
	to: "nome do destinatário (Todos se não for um específico)",
	text: "mensagem digitada",
	type: "message" // ou "private_message" para o bônus
  }
  
  ```
  
</details>    
<details>
<summary>    
BÔNUS (opcional): Buscar participantes
</summary>

- Para buscar a lista de participantes, envie uma requisição `GET` para a URL:

```jsx
https://mock-api.driven.com.br/api/v6/uol/participants
```
  
 - Esta requisição retornará um array de objetos no formato:
  
```jsx
[
  {
    name: "João"
},
  {
    name: "Maria"
  }
]
```
  
</details>
  </details>


<h1 id="Tecnologias">🚀 Tecnologias</h1>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript Vanilla


<h1 id="Aprendizados">🧠 Aprendizados</h1>

- Em construção
