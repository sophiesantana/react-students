import Button from "../Buttons/button";
import Container from "../Container/container";
import Title from "../Title/title";

export default function Input() {
  return (
    <>
      <Container customClass='bg-zinc-600 mx-32 h-400'>
        <Title customClass='bg-amber-400'>Cadastro de Alunos</Title>
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex flex-col">
            <label htmlFor="">Nome</label>
            <input type="text" name="" id="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">CPF</label>
            <input type="text" name="" id="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div>
            <Button customClass="w-40 h-10 font-bold bg-btn-registrar rounded-xl">Cancelar</Button>
            <Button customClass="w-40 h-10 font-bold bg-btn-registrar rounded-xl">Registrar</Button>
          </div>
        </div>
      </Container>
    </>
  )
}