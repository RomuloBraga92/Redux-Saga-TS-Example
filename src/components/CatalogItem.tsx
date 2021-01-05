import React, { useCallback } from 'react';
import { Product } from '../store/modules/Cart/types';
import { addProductToCartRequest } from '../store/modules/Cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';

interface CatalogItemProps {
  product: Product;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<StoreState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}

      <button 
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      { hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span> }
    </article>
  );
}

export default CatalogItem;