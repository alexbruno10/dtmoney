import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import {useState} from 'react';
import NewTransactionModal from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

function App() {

  Modal.setAppElement('#root');

  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModal(true);
  }


  function handleCloseNewTransactionModal(){
    setIsNewTransactionModal(false);
  }

  return (
    <TransactionsContext.Provider value={[]}> 
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;
