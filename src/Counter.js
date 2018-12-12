import { connect } from "react-redux";
import React from 'react'
import {Button} from 'react-materialize'
import selectStock from './Actions'
// import { increment, decrement, reset } from "./actionCreators";

const Counter = ({selectedStock, selectBlah}) => {
 return (
 <div>
  hi {selectedStock}
  <Button onClick={selectBlah} >switch</Button>
 </div>
  )
}

const mapStateToProps = state => {
  return { selectedStock: state.selectedStock };
};

const mapDispatchToProps = dispatch => {
  return {
    selectBlah: () => dispatch(selectStock('BLAH'))
  };
};

// const mapDispatchToProps = { increment, decrement, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
