# Aplicação Web - Automação com Docker e GitHub Actions

Este repositório contém uma aplicação web moderna composta de três componentes (frontend, backend e banco de dados) que são construídos e empacotados usando Docker. Os workflows do GitHub Actions são configurados para compilar e testar as imagens Docker para cada componente. Quando os testes passam, as imagens são publicadas no Docker Hub e o deploy é simulado em um ambiente de produção. Para a configuração, é necessário definir as credenciais do Docker Hub como secrets no GitHub (DOCKER_USERNAME e DOCKER_PASSWORD).
