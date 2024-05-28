# Projeto de Login - Desafio 04

Este projeto é um simples formulário de login criado utilizando React, React Hook Form e Yup para validação.

## Estrutura do Projeto

### Dependências

- **React**: Biblioteca para construção da interface do usuário.
- **React Hook Form**: Biblioteca para gerenciamento de formulários em React.
- **Yup**: Biblioteca para validação de esquemas.
- **Styled Components**: Biblioteca para estilização de componentes.
- **React Router DOM**: Biblioteca para navegação em aplicações React.

### DevDependências

- **Vite**: Ferramenta de build rápida para projetos front-end modernos.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.
- **@types**: Pacotes de definição de tipos para suporte ao TypeScript.

## Estrutura do Código

### Validação

Utilizei o Yup para definir o esquema de validação do formulário de login:

```javascript
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();
```

### Componente de Login

O componente de login é construído utilizando React Hook Form para gerenciamento do formulário e validação:

```javascript
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { defaultValues, IFormLogin } from "./types";

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar" disabled={!isValid} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
```

### Scripts

- **dev**: Inicia o servidor de desenvolvimento.
- **build**: Cria uma versão de produção do aplicativo.
- **lint**: Executa o ESLint para verificar a qualidade do código.
- **preview**: Prepara uma visualização da versão de produção.

## Como Executar o Projeto

1. Clone o repositório.
2. Instale as dependências com `npm install` ou `yarn install`.
3. Inicie o servidor de desenvolvimento com `npm run dev` ou `yarn dev`.

## Estrutura de Pastas

- **components**: Contém componentes reutilizáveis como Button e Input.
- **styles**: Contém estilos personalizados para o projeto.
- **types**: Contém definições de tipos para TypeScript.
- **pages**: Contém páginas da aplicação, como a página de login.

<h2 id="author">Desenvolvedor</h2>

<p>
    <a href="https://github.com/yuridiasp">
        <img
          align=left
          margin=10
          width=80
          src="https://avatars.githubusercontent.com/u/81938754?v=4"
        />
    </a>
      <p>
        <p>&nbsp&nbspYuri Dias<br>
        &nbsp&nbsp&nbsp
    </p>
</p>

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yuridiasp/) [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@yuridiasp/) [![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/yuri.dias.7739/) [![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x)](https://x.com/YuriDias_P) [![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/yuridiasp/) [![E-mail](https://img.shields.io/badge/-Email-000?style=for-the-badge&logo=microsoft-outlook&logoColor=007BFF)](mailto:yuristardias@hotmail.com)