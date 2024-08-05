import { useState } from "react";
import { getStudentByParams } from "../../services/studentService";
import { Student } from "../../interfaces/StudentInterface";
import Button from "../Buttons/button";

interface FiltersProps {
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

export default function Filters({ setStudents }: FiltersProps) {
  const [data, setData] = useState('');
  const [optionSearch, setOptionSearch] = useState('');

  const handleRegister = async () => {
    console.log(data, optionSearch)
    await getStudentByParams(data, optionSearch).then((result) => setStudents(result!));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionSearch(event.target.value);
  };

  return (
    <div className="flex justify-evenly w-full px-80 mb-3">
      <input
        className="p-2 rounded-xl"
        type="text"
        placeholder="Digite aqui seu nome"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <select onChange={handleSelectChange} className="rounded-xl">
        <option value='name'>Nome</option>
        <option value='cpf'>CPF</option>
        <option value='email'>Email</option>
      </select>
      <Button
        customClass="w-full max-w-40 h-10 font-bold bg-btn-registrar rounded-xl"
        onClick={handleRegister}
      >
        Buscar
      </Button>
    </div>
  )
}