import { useState, FormEvent, useContext } from 'react'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import { useTransactions } from '../../hooks/useTransactions'




interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  const { createTransaction } = useTransactions()
  
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [ category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount: amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return(

    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    > 

    <button 
    type="button" 
    onClick={onRequestClose}
    className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar modal" />
    </button>
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transação</h2>

      <input 
      placeholder="Título" 
      value={title}
      onChange={event => setTitle(event.target.value) }
      />

      <input
      type="number"
      placeholder="Valor" 
      value={amount}
      onChange={event => setAmount(Number(event.target.value)) }
      />

      <TransactionTypeContainer>
        <RadioBox
        type="button"
        onClick={() => setType('deposit')}
        isActive={type === 'deposit'}
        activeColors={'green'}
        >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
        type="button"
        onClick={() => setType('withdraw')}
        isActive={type === 'withdraw'}
        activeColors={'red'}
        >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input
      placeholder="Categoria"
      value={category}
      onChange={event => setCategory(event.target.value)}
      />

      <button type="submit">
        Cadastrar transação
      </button>


    </Container>

  </Modal>
  )
}

function createTransaction(arg0: { title: string; amount: number; category: string; type: string }) {
  throw new Error('Function not implemented.')
}
