import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import "./css/from.css"
// const FormContainer = styled.form`
//   display: flex;
//   align-items: flex-end;
//   gap: 10px;
//   flex-wrap: wrap;
//   background-color: #fff;
//   padding: 20px;
//   box-shadow: 0px 0px 5px #ccc;
//   border-radius: 5px;
// `;

// const InputArea = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   width: 120px;
//   padding: 0 10px;
//   border: 1px solid #bbb;
//   border-radius: 5px;
//   height: 40px;
// `;

const Label = styled.label`
  color: black
`;

// const Button = styled.button`
//   padding: 10px;
//   cursor: pointer;
//   border-radius: 5px;
//   border: none;
//   background-color: #2c73d2;
//   color: white;
//   height: 42px;
// `;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.categoria.value = onEdit.categoria;
      user.descricao.value = onEdit.descricao;
 
    }
  }, [onEdit]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.categoria.value ||
      !user.descricao.value 
    
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          categoria: user.categoria.value,
          descricao: user.descricao.value, 
               
         
        })
        .then(({ data }) => toast.success(data))   
        .catch(({ data }) => toast.error(data));
        console.log("if")
    } else {
      await axios
        .post("http://localhost:8800/", {
          nome: user.nome.value,
          categoria: user.categoria.value,
          descricao: user.descricao.value,
       
          
        }) 
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
        console.log("else")
    }
    


    user.nome.value = "";
    user.categoria.value = "";
    console.log("fora")
    
    user.descricao.value = "";
    

    setOnEdit(null);
    getUsers();
  };

  return (
    <div className="FormContainer" ref={ref} onSubmit={handleSubmit} style={{maxWidth:"60vw"}} >
      <div className="InputArea">
        <Label>Nome</Label>
        <input name="nome" />
      </div >
      <div className="InputArea">
        <Label>categoria</Label>
        <input name="categoria"/>
      </div >
      <div className="InputArea">
        <Label>descricao</Label>
        <input name="descricao" />
      </div >
   

      <button type="submit">SALVAR</button>
    </div>
  );
};

export default Form;
