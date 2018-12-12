import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Card, Input, Icon, Row, Button, Container } from 'react-materialize';
import selectStock from './Actions'
let state = {}

const mapDispatchToProps = dispatch => {
  return {
    selectStock: (name) => dispatch(selectStock(name))
  };
};

const Home = ({ history, selectStock }) => (
    <Container>
      <h1>StockFind</h1>
      <Card>
        <Row>
          <Input s={6} label="Search By Ticker..." onChange={(e) => state.search = e.target.value} validate><Icon>search</Icon></Input>
          <Button waves='light' onClick={() => {
              selectStock(state.search)
              history.push(`/stock/`)
            }}>Search</Button>
        </Row>
      </Card>
    </Container>
)

Home.contextTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default connect(null, mapDispatchToProps)(Home)
