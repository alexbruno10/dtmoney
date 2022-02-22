import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import App from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
            id: 1,
            title: 'Recebido',
            type: 'deposit',
            category: 'Day',
            amount: 6000,
            createAt: new Date('2022-02-14 21:00:00'),
        },
        {
          id: 2,
          title: 'Recebido',
          type: 'deposit',
          category: 'Day',
          amount: 2000,
          createAt: new Date('2022-02-10 21:00:00'),
      },
      ],
    })
  },

  routes(){
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
