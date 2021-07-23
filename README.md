<markdown>
StaticFiles API
API em Node para servir arquivos estáticos
 
Configuração inicial
 
 Antes de qualquer coisa, instale o Node.js versão 14: https://computingforgeeks.com/install-node-js-14-on-ubuntu-debian-linux/
 
 1. Faça o pull do projeto na máquina onde deseja servir
 2. Usando um terminal na pasta do projeto baixado, execute o comando:
 
 ```bash
 npm i
 ```

 Após o término, execute o comando 

 ```bash
 npm run start
 ```

 3. Aparecerá no console a seguinte mensagem: 
 
 ```
 Servidor iniciado na porta 5000
 ```

 4. Os arquivos podem ser colocados dentro da pasta /public/Images ou /public/xml
 5. Para acessar um arquivo, é só colocar localhost:5000/nomeDoArquivo

 6. Toda a "mágica" está no arquivo app.js. Acesse para olhar os comentários no código



</markdown>
