import styles from "./Formulario.module.css";

import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  //Caso o formulário esteja pronto para envio
  const onSubmit = (data) => {
    console.log("Dados preenchidos: ", data);
  };

  //Caso o formulário tenha erros
  const onError = () => {
    console.log("Erros: ", errors);
  };
  return (
    <div>
      <h1>Formulário</h1>

      <form
        className={styles.formulario}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {/* CAIXINHA DE NOME */}
        <label>
          <span>Nome: </span>
          <input type="text" id="nome" placeholder="Nome Completo"{...register("nome",{required : "O campo nome é obrigatório", 
            minLenght:{value: 2, message: "O mínimo de caracteres é 2",}, 
            maxLength: {value: 8, message: "O máximo de caracteres é 8",},
            pattern:{value: /^[A-Za-z\s]+$/i, message: "O nome não pode conter números ou símbolos"},
            })} />
        </label>
        {/* <p className={styles.error}>Nome é obrigatório</p> */}
        {errors.nome && 
          <p className={styles.error}>{errors.nome.message}</p>
        }

        {/* CAIXINHA DE EMAIL */}
        <label>
            <span>Email</span>
            <input type="email"
            name="email"
            placeholder="Digite seu email"
            {...register("email",{
              required: "O campo email é obrigatório",
              pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email inválido"},
              validate: (value) => value.includes("@") || "O email é inválido",
            })}
            />
        </label>
        
        
        {/* CAIXA DE SENHA */}
        <label>
            <span>Senha</span>
            <input type="password"
            name="senha"
            placeholder="Digite sua senha"
            {...register("senha",{
              required: "O campo senha é obrigatório",
              minLength: {value: 6, message: "A senha deve ter no mínimo 6 caracteres"},
              maxLength: {value: 15, message: "A senha deve ter no máximo 15 caracteres"},
              pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?%])[A-Za-z\d@$!%*?%]{8,}$/, message: "A senha deve conter peço meno uma letra maiúscula, uma letra minúscula, um número e um caracter escpecial"},
            })}
            />
        </label>
        {errors.senha && <p className={styles.error}>{errors.senha.message}</p>}

        {/* BOTÃO PARA ENVIAR */}
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            borderColor: "black",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
