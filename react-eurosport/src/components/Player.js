import React from 'react'
import { Card, Col, Avatar, Popover } from 'antd'
const { Meta } = Card


const MetaTitle = ({ data }) => (
  <p>Ranked #{ data.rank }</p>
)

const MetaDescription = ({ data }) => (
  <p>
    Last: <b>{ data.wins } wins</b> | <b>{ data.losses } losses</b>
  </p>
)

const PopoverContent = ({ data }) => (
  <ul>
    <li>
      Age: { data.age }yo
    </li>
    <li>
      Height { data.height }cm
    </li>
    <li>
      Weight: { data.weight / 1000 }kg
    </li>
    <li>
      Score: { data.points } point
    </li>
  </ul>
)

const Player = ({
  firstname,
  lastname,
  shortname,
  sex,
  country,
  picture,
  data
}) =>
  <Col span={12} key={ firstname }>
    <Popover
      placement="right"
      title={ shortname }
      content={ <PopoverContent data={ data }/> }
    >
      <Card
        title={ `${ firstname } ${ lastname }` }
        cover={
          <img alt={ `${ firstname } ${ lastname }` } src={ picture }/>
        }
      >
          <Meta
            avatar={ <Avatar alt={ country.code } src={ country.picture }/> }
            title={ <MetaTitle data={ data }/> }
            description={ <MetaDescription data={ data }/> }
          />
      </Card>
    </Popover>
  </Col>


export default Player
