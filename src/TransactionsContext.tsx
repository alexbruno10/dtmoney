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

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
    }, []);

    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
}