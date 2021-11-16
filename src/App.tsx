import { Header } from '../src/components/Header'
import { Dashboard } from './components/Dashboard/index'
import { NewTransactionModal } from './components/NewTransactionModal/index'
import Modal from 'react-modal'
import { useState } from 'react'
import { TransactionsProvider} from './hooks/useTransactions'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return(
    <TransactionsProvider>
      <Header isNewTransactionModalOpen={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </TransactionsProvider>
  )
}

