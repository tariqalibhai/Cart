import React from 'react';

export default function Button(props) {
  return (
    <div className="col-3">
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-danger" onClick={props.decrementQuantity}>
          -
        </button>
        <button type="button" className="btn btn-warning">
          Quantity: {props.quantity}
        </button>
        <button type="button" className="btn btn-success" onClick={props.incrementQuantity}>
          +
        </button>
      </div>
    </div>
  );
}
