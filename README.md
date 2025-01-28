# Visão Geral
O Software Apolo Farma busca oferecer serviços de qualidade, permitindo que clientes sejam capazes de pesquisar produtos e compra-los. O sistema pode ser utilizado dentro de uma unidade física, sendo operado por um fucionário, consequentemente, oferecendo opções diferenciadas para este usuário. O sistema será capaz de oferecer opções de:
- Login de cliente
- Login de funcionário
- Login de gerente
- Controle de medicações: Excluir, Adicionar, Editar e Visualizar
- Controle de contas: Exccluir, Cadastrar, Editar e visualizar

## Usuários do Sistema
Cliente: Será capaz de visualizar medicamentos e compra-los. Tem autonomia para criar uma conta e atualizar ela.
Funcionário: Será capaz de visualizar medicamentos, edita-los, deleta-los e adicionar. Também pode atualizar e deletar contas de clientes.
Gerente: É capaz de realizar todas as ações do funcionário com a possibilidade ainda de cadastrar funcionários e atualizar e deletar contas de funcionários e clientes.

## Tecnologias Utilizadas
### Front-End
- HTML v5
- CSS v3
- JavaScript
### Back-End
- NodeJS v18
- Express v5
- MySQL v8

## Regras de código
- O código deve ser coeso, ou seja, cada classe, método ou função deve ser responsável por uma único propósito.
- Uso do padrão Camel Case para declarar classes, funções e váriaveis.
- Uso de comentários para explicar uma função ou classe.
- Identação correta, buscando melhorar a legibilidade do código.

## Regras e padrões de git adotodas
### Commits
- As mensagens de commit devem ser claras e objetivas.
- Cada commit deve se tratar de uma mudança lógica apenas.
### Branches
- Utiliza-se as branchs "developBack" e "developFront", respectivamente, para códigos back-end e front-end.
- O merge com a branch "release" deve ser feita apenas após a conclusão de testes e validações de funcionalidades que foram implementadas.
### Organização
- Adicionar no arquivo `.gitignore` a extensão dos arquivos de configuração específicos para o ambiente local de desenvolvimento.
- Adicionar no arquivo `.gitignore` a extensão de arquivos gerados durante a execução ou compilação do código.
- Adicionar no arquivo `.gitignore` pastas e extensões de arquivos relacionados a dependências externas.

## Estrutura de diretório
```sh
|-- docs/
|   |-- requisitos/
|   |-- diagramas/
|-- src/
|-- .gitignore
|-- LICENSE
|-- README.md
```
## Desenvolvedores
`Elian Fernando Simões Costa`
`Thierry Jacinto Gomes`

