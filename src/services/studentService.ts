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
  const selectedOption = optionSearch ? optionSearch : 'name';
  const routeWithparams = `/students?${selectedOption}=${data}`;
  return api.get<Student[]>(!data ? `/students` : routeWithparams)
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

export const updateStudentById = (student: Student): Promise<void> => {
  return api.patch<Student>(`/students/${student.id}`, student)
    .then(() => {
      console.log('Estudante atualizado com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao atualizar estudante:', error);
    });
}

export const deleteStudentById = (id: string) => {
  return api.delete<Student>(`/students/${id}`)
    .then(() => {
      console.log('Estudante excluido com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao excluir estudante:', error);
    });
}