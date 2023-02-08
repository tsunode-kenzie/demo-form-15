import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";

// books
// [GET] /books busca todos os livros
// [GET] /books/1 busca um livro especifico
// [DELETE] /books/1 busca um livro especifico
// [POST] /books busca um livro especifico

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  console.log("Teste");

  const registerBook = async (data) => {
    console.log(data);

    try {
      const response = await api.post("/books", data);
      console.log(response)
      const id = response.data.id;

      toast("Cadastrado com sucesso");
      navigate(`/${id}`);
      // toast 
    } catch (error) {
      console.error(error);
      reset();
      // toast
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit(registerBook)}>
        <input type="text" {...register("name")} />
        <input type="text" {...register("cover")} />
        <input type="text" {...register("published")} />
        <input type="text" {...register("publishingCompany")} />
        <input type="text" {...register("numberPages")} />
        <input type="text" {...register("licensor")} />
        <input type="text" {...register("category")} />
        <input type="text" {...register("genre")} />
        <input type="text" {...register("art")} />
        <input type="text" {...register("editor")} />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
};

export default Register;
