import {createContext} from 'react'
import {useEffect, useContext, useState, ReactNode} from 'react'
import {api} from '../src/services/api'


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionInput){
    
        api.post('/transactions', transaction)    
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}