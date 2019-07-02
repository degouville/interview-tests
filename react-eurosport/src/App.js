import React, { Component } from 'react'
import api from './services/apiService'
import './App.css'
import pkg from '../package.json'

import PlayerList from './components/PlayerList'
import Player from './components/Player'
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout
const { name: appTitle, repository } = pkg

class App extends Component {
  state = {
    players: []
  }

  async fetchPlayers() {
    const players = await api.fetchPlayers()
    this.setState({ players })
  }

  componentDidMount() {
    this.fetchPlayers()
  }

  render() {
    const { players } = this.state

    return (
      <div className="App">
        <Layout>
          <Header className="App-Header">
            <h1 className="App-Title">{ appTitle }</h1>
          </Header>

          <Content style={{ padding: '2em', maxWidth: '500px' }}>
            <PlayerList>
              { !!players.length && players.map(Player) }
            </PlayerList>
          </Content>
        </Layout>

        <Footer>
          <p>
            Read more on <a href={ repository } target="_blank">Github</a>
          </p>
        </Footer>
      </div>
    )
  }
}

export default App
