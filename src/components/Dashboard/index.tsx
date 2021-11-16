import { Container } from './styles'
import { Summary } from '../../components/Summary/index'
import { TransactionsTable } from '../TransactionsTable'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}