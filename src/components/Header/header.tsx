import logo from '../../assets/descomplica.png';
import Container from '../Container/container';

export default function Header() {
  return (
    <div>
      <Container customClass='mx-32 h-24'>
        <div className='flex w-full h-full justify-between items-center'>
          <div className='w-44 h-16'>
            <img src={logo} alt="logo descomplica" className='w-full' />
          </div>
          <div className='flex w-96 justify-between'>
            <button className='w-40 h-10 text-txt-btn-h font-bold border-2 border-txt-btn-h rounded-xl'>Cadastro</button>
            <button className='w-40 h-10 text-txt-btn-h font-bold border-2 border-txt-btn-h rounded-xl'>Alunos</button>
          </div>
        </div>
      </Container>
    </div>
  )
}