import React from 'react'
import { Row } from 'antd'

const PlayerList = ({ children }) =>
  <Row justify="center" gutter={20} className="player-list">
    { children }
  </Row>

export default PlayerList
