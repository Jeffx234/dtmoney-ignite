import  logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { Content } from './styles'


interface HeaderProps  {
  isNewTransactionModalOpen: () => void;
}

export function Header({ isNewTransactionModalOpen }: HeaderProps) {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />
        <button type="button" onClick={isNewTransactionModalOpen}>
          Nova transação
        </button>
       
      </Content>
    </Container>
  )
}