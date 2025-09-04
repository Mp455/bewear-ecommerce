# Bewear Bootcamp — E-commerce FSW

Projeto de e-commerce construído com Next.js (App Router), focado em uma arquitetura moderna, tipada e escalável. O app inclui autenticação, catálogo de produtos, carrinho, checkout e páginas de pedidos.

## Funcionalidades

- **Autenticação e sessão de usuário com Better Auth**
- **Catálogo de produtos e variantes**
- **Checkout com Stripe**
- **Autenticação e sessão de usuário**
- **Área de "meus pedidos"**

# Rodando o projeto localmente


Você deverá clonar o repositório, depois rodar os comandos abaixo:

```
$ npm install
$ npm run dev

```

**Obs:** Lembre-se de criar o arquivo .env e fornecer a URL da API

```
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DB
BETTER_AUTH_SECRET=uma_chave_segura
BETTER_AUTH_URL=http://localhost:3000

```

# Banco de Dados (Drizzle)
```
npx drizzle-kit generate
npx drizzle-kit migrate

```

# Tecnologias Utilizadas
 - [Next.js](https://nextjs.org/)
 - [Tailwindcss](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
 - [React-hook-form](https://react-hook-form.com/)
 - [Zod](https://zod.dev/)
 - [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers/v/1.3.7)
  - [Drizzle ORM](https://orm.drizzle.team/)
  - [Tanstack React Query](https://tanstack.com/query/latest)

-----------------------------------------------------
