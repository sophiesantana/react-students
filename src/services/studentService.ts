import { Student } from "../interfaces/StudentInterface";
import api from "./api";

export const getStudents = (): Promise<Student[]> => {
  return api.get<Student[]>('/students')
    .then((response) => response.data)
    .catch((error) => {
      console.error('Erro ao buscar estudantes:', error);
      return [];
    });
}

export const getStudentById = (id: string): Promise<Student | null> => {
  return api.get<Student>(`/students/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Erro ao buscar estudantes:', error);
      return null;
    });
}

export const getStudentByParams = (data: string, optionSearch: string): Promise<Student[] | null> => {
  return api.get<Student[]>(`/students?${optionSearch}=${data}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Erro ao buscar estudantes:', error);
      return [];
    });
}

export const createStudent = (student: Student): Promise<void> => {
  return api.post('/students', student)
    .then(() => {
      console.log('Estudante registrado com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao registrar estudante:', error);
    });
}