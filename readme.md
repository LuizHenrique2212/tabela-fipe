# Consultor de preços de veículos

## "Clone" tabela FIPE!

> status: em desenvolvimento.

Este projeto está sendo desenvolvido com o propósito de aprender a consumir uma API com Javascript puro, pelo método *fetch* ! Escolhi este tipo de projeto por que encontrei uma API gratuíta e bastante completa e que poderia se tornar uma projeto comercial, por ser algo muito útil. 

### Este é o site da API que foi utilizada no projeto: <br>
 <https://deividfortuna.github.io/fipe/v2/#operation/GetHistoryByFipeCode> <br> <br>


 ### Layout do projeto

<img src=".//Layouts/Layout%20principal.png" alt="" width="400"/> <br> <br>

### Reponsividade 

<img src=".//Layouts/Responsividade.gif" alt="" width="600"/> <br> <br>

### Funcionamento

O funcionamento do projeto é bem simples: 
+ O usuário escolhe um dos quatro tipos de veículos que ele deseja consultar o preço (incluí o avião como forma de diferenciar o projeto  :P);
    
+ Logo em seguida, a API envia uma _request_ para o servidor e retorna uma _response_ com todos os veículos disponíveis daquela categoria;
    
+ Após selecionar também o modelo e o ano do veículo, o usuário clica no botão "_chechar o preço_" e então, a API de posse de todas essas informações (tipo do veículo, marca, modelo e ano), retorna os dados dentro de uma tabela com a informação mais importante de todas que é o *preço do veículo !*.

## Referências <br>

API: <a href="<https://deividfortuna.github.io/fipe/v2/#operation/GetHistoryByFipeCode>"> Fipe API </a> <br>

Desenvolvido por: <a href="https://github.com/LuizHenrique2212"> Luiz Henrique</a>

Ícones dos veículos<a href="https://www.svgrepo.com/"> svg repo </a> <br>

Ícone do alvo: <a href="https://fontawesome.com/"> fonts awesome </a> <br>

Fontes: <a href="https://fonts.google.com/"> Google fonts </a> <br>