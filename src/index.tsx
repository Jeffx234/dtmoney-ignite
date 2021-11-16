import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freenlance de webSite',
          type: 'deposit',
          category: 'dev',
          amount: 6000.00,
          createdAt: new Date('2021-11-09 07:06:00')

        },
        {
          id: 2,
          title: 'Dts',
          type: 'deposit',
          category: 'dev',
          amount: 4000.00,
          createdAt: new Date('2021-11-09 07:06:00'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => { 
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
