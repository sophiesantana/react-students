import { useEffect, useState } from "react";
import Button from "../Buttons/button";
import Container from "../Container/container";
import { deleteStudentById, getStudentById, updateStudentById } from "../../services/studentService";
import { Student } from "../../interfaces/StudentInterface";

interface ModalStudentProps {
  onClose: () => void;
  studentId: string;
}

export default function ModalStudent({ onClose, studentId }: ModalStudentProps) {
  const [student, setStudent] = useState<Student>();

  useEffect(() => {
    getStudentById(studentId).then((response) => setStudent(response!));
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 left-0">
      <div onClick={onClose}>x</div>
      <div className="bg-white w-full max-w-lg p-4 rounded-lg">
        <Container customClass='bg-form w-full h-50 rounded-xl mb-8'>
          <div className="flex flex-col w-full h-full items-center justify-center">
            <Container customClass="flex flex-col w-3/4 h-auto justify-center">
              <div className="flex flex-col mb-5">
                <label className="text-label font-bold ml-2" htmlFor="">Nome</label>
                <input
                  className="p-2 rounded-xl"
                  type="text"
                  placeholder="Digite aqui seu nome"
                  value={student?.name || ''}
                  onChange={(e) => setStudent({ ...student, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-label font-bold ml-2" htmlFor="">CPF</label>
                <input
                  className="p-2 rounded-xl"
                  type="text"
                  placeholder="Digite aqui seu CPF"
                  value={student?.cpf}
                  disabled
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-label font-bold ml-2" htmlFor="">Email</label>
                <input
                  className="p-2 rounded-xl"
                  type="email"
                  placeholder="Digite aqui seu email"
                  value={student?.email}
                  disabled
                />
              </div>
            </Container>
            <Container customClass='w-full h-20 flex items-center justify-evenly'>
              <Button
                customClass="w-full max-w-40 h-10 font-bold bg-btn-registrar rounded-xl"
                onClick={() => deleteStudentById(student?.id!)}
              >
                Excluir
              </Button>
              <Button
                customClass="w-full max-w-40 h-10 font-bold bg-btn-registrar rounded-xl"
                onClick={() => updateStudentById(student!)}
              >
                Editar
              </Button>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  )
}