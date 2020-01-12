const CartSubTotal = ({ total }) => {
  return (
    <div className="subtotal">
      <div className="label"> Sub Total </div>
      <div className="price"> P {total} </div>
      <style jsx>
        {`
          .subtotal {
            margin: 3rem 0;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .label {
            font-size: 2rem;
            padding: 0 5rem;
          }

          .price {
            font-size: 2.5rem;
            color: var(--color-primary);
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
};

export default CartSubTotal;
