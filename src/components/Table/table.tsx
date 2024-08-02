import { useState } from "react";
import { Student } from "../../interfaces/StudentInterface";
import ModalStudent from "../Modal/modalStudent";

interface StudentTableProps {
  students: Student[];
}

export default function Table({ students }: StudentTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentId, setStudent] = useState('');

  const handleItemClick = (id: string) => {
    setIsModalOpen(true);
    setStudent(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left bg-gray-100 border-b border-gray-200">Nome</th>
            <th className="px-6 py-3 text-left bg-gray-100 border-b border-gray-200">CPF</th>
            <th className="px-6 py-3 text-left bg-gray-100 border-b border-gray-200">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((row: Student) => (
            <tr key={row.id} className="hover:bg-gray-50" onClick={() => handleItemClick(row.id!)}>
              <td className="px-6 py-4 border-b border-gray-200">{row.name}</td>
              <td className="px-6 py-4 border-b border-gray-200">{row.cpf}</td>
              <td className="px-6 py-4 border-b border-gray-200">{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      { isModalOpen && <ModalStudent studentId={studentId} onClose={handleCloseModal}/> }
    </div>
  );
}