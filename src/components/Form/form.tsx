import { useState } from "react";
import Button from "../Buttons/button";
import Container from "../Container/container";
import Title from "../Title/title";
import { createStudent } from "../../services/studentService";

export default function Form() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    const student = { name, cpf, email };
    await createStudent(student);
  };

  return (
    <>
      <Container customClass='bg-form mx-32 h-450 rounded-xl mb-8'>
        <div className="flex flex-col w-full h-full items-center justify-center">
          <Container customClass='w-full h-20 flex items-center justify-center'>
            <Title customClass='flex justify-center font-bold text-2xl'>Cadastro de Alunos</Title>
          </Container>
          <Container customClass="flex flex-col w-3/4 h-auto justify-center">
            <div className="flex flex-col mb-5">
              <label className="text-label font-bold ml-2" htmlFor="">Nome</label>
              <input
                className="p-2 rounded-xl"
                type="text"
                placeholder="Digite aqui seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-label font-bold ml-2" htmlFor="">CPF</label>
              <input
                className="p-2 rounded-xl"
                type="text"
                placeholder="Digite aqui seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-label font-bold ml-2" htmlFor="">Email</label>
              <input
                className="p-2 rounded-xl"
                type="email"
                placeholder="Digite aqui seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Container>
          <Container customClass='w-full h-20 flex items-center justify-evenly'>
            <Button
              customClass="w-full max-w-40 h-10 font-bold bg-btn-registrar rounded-xl"
            >
              Cancelar
            </Button>
            <Button
              customClass="w-full max-w-40 h-10 font-bold bg-btn-registrar rounded-xl"
              onClick={handleRegister}
            >
              Registrar
            </Button>
          </Container>
        </div>
      </Container>
    </>
  )
}