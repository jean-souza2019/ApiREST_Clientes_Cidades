# API Node.JS - Interview

API Desenvolvida em Node para atender os requesitos solicitados no Interview.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Requisitos

Construção do código contemplando as seguintes operações expostas como endpoints REST para:

```
- Cadastrar cidade
- Cadastrar cliente
- Consultar cidade pelo nome
- Consultar cidade pelo estado
- Consultar cliente pelo nome
- Consultar cliente pelo Id
- Remover cliente
- Alterar o nome do cliente
```

Considere o cadastro com dados básicos:

```
- Cidades: nome e estado
- Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora.
```

### 🔧 Instalação

```
npm install
```

## ⚙️ Testes

Requisições REST:
Cidades:
```
GET->localhost:3000/estado/{Nome do estado}
GET->localhost:3000/cidade/
GET->localhost:3000/estado/{Nome da cidade}

POST->localhost:3000/cidade/
	(PARAMETROS: nome, estado)
```	

Clientes:
```
GET->localhost:3000/cliente/nome/{Nome completo do cliente}
GET->localhost:3000/cliente/id/{ID do cliente}
POST->localhost:3000/cliente/
	(PARAMETROS: nomeCompleto, sexo, dataNascimento, idade, cidade)
PUT->localhost:3000/cliente/id/{ID do cliente}
	(PARAMETROS: nomeCompleto, sexo, dataNascimento, idade, cidade)    
DELETE->localhost:3000/cliente/{ID do cliente}
```

## ✒️ Autores

* **Jean Marcos de Souza** - *Desenvolvedor* - jiamarcos@outlook.com.br
