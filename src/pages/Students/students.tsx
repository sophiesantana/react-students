import { useEffect, useState } from "react";
import Container from "../../components/Container/container";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Table from "../../components/Table/table";
import Title from "../../components/Title/title";
import { getStudents } from "../../services/studentService";
import { Student } from "../../interfaces/StudentInterface";
import Filters from "../../components/Filters/filters";

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    getStudents()
      .then((response) => setStudents(response));
  }, []);

  return (
    <>
      <Header />
      <Container customClass='bg-form mx-32 h-450 rounded-xl mb-8'>
        <Title customClass='flex justify-center font-bold text-2xl pt-8 mb-8'>Listagem de Alunos</Title>
        <Filters setStudents={setStudents}/>
        <Container customClass="px-20 flex justify-center">
          { students.length > 0 ? <Table students={students} /> : <h2>Não existem alunos registrados.</h2> }
        </Container>
      </Container>
      <Footer />
    </>
  )
}