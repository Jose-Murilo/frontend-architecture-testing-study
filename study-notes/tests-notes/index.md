# Qualidade de Software

- Qualidade de software é o grau em que um software atende aos requisitos e às necessidades dos usuários.
- Um software de qualidade não é apenas um software sem bugs.
- A qualidade envolve funcionamento, desempenho, segurança, usabilidade e facilidade de manutenção.

Um software de qualidade deve:

- funcionar corretamente;
- resolver o problema do usuário;
- ser fácil de manter;
- possuir bom desempenho;
- ser confiável;
- ser seguro.

## Testes de Software

- Os testes não criam qualidade.
- Os testes verificam a qualidade do software.
- Eles aumentam a confiança de que o sistema continua funcionando após mudanças.

Objetivos dos testes:

- Encontrar defeitos.
- Evitar regressões.
- Validar requisitos.
- Garantir maior confiança no software.

Princípio importante:

- Quanto antes um erro é encontrado, menor tende a ser o custo da sua correção.

# Tipos de Testes

## Teste Manual

- Executado por uma pessoa.
- Valida o funcionamento da aplicação manualmente.
- Simples, porém demorado e sujeito a erros.

## Teste Automatizado

- Executado por código.
- Rápido, repetível e confiável.
- Pode ser integrado ao CI/CD.

## Teste Unitário

- Testa a menor unidade do sistema.
- Exemplo: função, método ou componente isolado.
- Verifica se uma unidade funciona corretamente.

## Teste de Integração

- Testa a comunicação entre duas ou mais partes do sistema.
- Exemplo: componente + API ou Context + React Query.

## Teste End-to-End (E2E)

- Simula o comportamento de um usuário real.
- Testa o fluxo completo da aplicação.
- Exemplo: login → cadastro → compra → logout.

Princípio importante:

- Cada tipo de teste possui um objetivo diferente.
- Os testes se complementam e não substituem uns aos outros.

# TDD (Test-Driven Development)

- Metodologia onde os testes são escritos antes da implementação.
- Objetivo principal: desenvolver código guiado pelos testes.

Ciclo do TDD:

1. Red

- Escrever um teste que falha.

2. Green

- Escrever o mínimo de código para o teste passar.

3. Refactor

- Melhorar o código sem alterar seu comportamento.

Vantagens:

- Código mais desacoplado.
- Maior confiança para refatorar.
- Menor chance de regressões.
- Melhor definição das regras de negócio.

Desvantagens:

- Maior tempo inicial de desenvolvimento.
- Curva de aprendizado.
- Nem toda funcionalidade se beneficia do TDD.

Quando usar:

- Regras de negócio.
- Casos de uso.
- Validações.
- Algoritmos.
- Código complexo.

Quando geralmente não usar:

- Layouts.
- Componentes puramente visuais.
- Protótipos.
- Funcionalidades simples sem regras de negócio.
