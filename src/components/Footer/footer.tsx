import logo from '../../assets/descomplica.png';
import Container from '../Container/container';
import Title from '../Title/title';

export default function Footer() {
  return (
    <div>
      <Container customClass='mx-32 h-24'>
        <div className='flex w-full h-full justify-between items-center'>
          <div className='w-32 h-16'>
            <img src={logo} alt="logo descomplica" className='w-full' />
          </div>
          <div className='flex w-96 justify-between'>
            <Title customClass='flex justify-center font-bold text-xs'>TERMOS DE USO</Title>
            <Title customClass='flex justify-center font-bold text-xs'>POLÍTICA DE PRIVACIDADE</Title>
          </div>
        </div>
      </Container>
    </div>
  )
}