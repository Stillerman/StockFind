import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { Card, Container, Row, Col, Button, Icon, Input} from 'react-materialize'
import { fetchInfo, selectStock } from './Actions'

const mapStateToProps = state => {
  return { selectedStock: state.selectedStock, stockInfo: state.stockInfo, invalid: state.invalid, tick: state.tick }
}
const mapDispatchToProps = dispatch => {
  return {
    selectStock: (name) => dispatch(selectStock(name)),
    fetchInfo: (name) => dispatch(fetchInfo(name))
  };
};

const navStyle = {
  width: '100%',
  backgroundColor: '#f0f0f0',
  top: 0,
  position: 'absolute'
}


let state = {
  search: ''
}


class Stock extends React.Component {

  componentDidMount(){
    this.props.fetchInfo(this.props.selectedStock)
  }

  handleSearch (e) {
    state.search = e.target.value
  }

  render() {
    return (
      <div>
        <div style={navStyle}>
          <Row>
            <Col s={9} style={{padding: '20px'}}><Link to="/">Home / {this.props.stockInfo.symbol}</Link></Col>
            <Col s={3}><Input label="Search" onChange={this.handleSearch}></Input>
            <Button onClick={() => {this.props.fetchInfo(state.search)}} floating className='blue' style={{margin: '10px'}} waves='light' icon='search' />
            </Col>

          </Row>
        </div>
        <Container>
          <Card style={{marginTop: '25%'}}>
                <Row>
            <Col s={6}>
              <h3>{this.props.stockInfo.symbol}</h3>
              <h4>{this.props.stockInfo.exchange}</h4>
              <Icon large>{this.props.stockInfo.netChange > 0 ? 'arrow_upward' : 'arrow_downward'}</Icon>
            </Col>
            <Col s={6}>
              <h1>{this.props.stockInfo.name}</h1>
              <p>Price: {this.props.stockInfo.lastPrice}</p>
              <p>Net Change: {this.props.stockInfo.netChange}</p>
              <p>Percent Change: {this.props.stockInfo.percentChange}</p>
              <p>Volume: {this.props.stockInfo.volume}</p>
            </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stock)
