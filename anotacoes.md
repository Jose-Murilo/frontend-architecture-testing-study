## Arquitetura de Software

- Arquitetura de software é o conjunto de decisões importantes que definem a estrutura de um sistema.
  -- Arquitetura não é escrever código.
  -- Arquitetura é decidir como o sistema será construído antes mesmo da implementação.
  -- O foco está na organização do sistema e nas relações entre seus componentes.

Arquitetura de software é:

- definir a estrutura do sistema;
- organizar responsabilidades;
- definir como os componentes se relacionam;
- controlar dependências entre módulos;
- facilitar manutenção;
- permitir evolução;
- reduzir o impacto das mudanças;
- aumentar escalabilidade e reutilização;
- tomar decisões técnicas importantes antes e durante o desenvolvimento.

Objetivo principal:

- Permitir que o software evolua com segurança e menor custo de manutenção.

A arquitetura responde perguntas como:

- Como o sistema será dividido?
- Quem depende de quem?
- Como os módulos se comunicam?
- Como os dados percorrem o sistema?
- Quais tecnologias serão utilizadas?

Princípio importante:

- A arquitetura não resolve apenas os problemas de hoje, mas principalmente os problemas que surgirão no futuro.

---

# Arquitetura VS Design

Arquitetura:

- Define a organização geral do sistema.
- Possui visão macro.
- Define a estrutura e os relacionamentos entre os componentes.
- Envolve decisões difíceis e custosas de alterar.
- Afeta todo o sistema.

Exemplos:

- Monólito ou Microsserviços.
- React ou Angular.
- PostgreSQL ou MongoDB.
- Controller → Service → Repository.
- Forma de autenticação.
- Comunicação entre módulos.

Design:

- Define como cada parte da arquitetura será implementada.
- Possui visão micro.
- Organiza classes, funções, componentes e módulos.
- Decisões locais e mais fáceis de alterar.
- Afeta apenas uma funcionalidade ou módulo.

Exemplos:

- Divisão de um Service em classes menores.
- Aplicação dos princípios SOLID.
- Uso de Design Patterns (Strategy, Factory, Observer).
- Organização de componentes React.
- Estrutura de métodos e classes.

Resumo:

- Arquitetura define como o sistema é organizado para evoluir.
- Design define como cada parte dessa organização será construída.

Regra prática:

- Se a decisão impacta o sistema inteiro → Arquitetura.
- Se impacta apenas uma funcionalidade ou módulo → Design.

# Microserviços

# Seveless
