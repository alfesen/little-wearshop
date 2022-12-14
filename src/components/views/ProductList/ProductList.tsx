import { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { Category } from '../../../types/Types'
import { cartActions } from '../../../store/cart-slice'

import Heading from '../../models/Heading/Heading'
import ProductListItem from '../../models/ProductListItem/ProductListItem'

import s from './ProductList.module.scss'

const ProductList = ({ category }: { category: Category }) => {
  const { name, products } = category

  const dispatch = useDispatch()

  const productList = products.map(product => {
    const { id, name, price, images, description } = product
    const addProductToCart = (id: string) => {
      if (id === product.id) {
        dispatch(
          cartActions.addProductToCart({
            ...product,
            amount: 1,
            image: images[0],
            price: price,
          })
        )
      }
    }
    return (
      <ProductListItem
        onAdd={addProductToCart}
        key={`${id}__product_key`}
        description={description}
        id={id}
        name={name}
        price={price}
        image={images[0]}
      />
    )
  })

  return (
    <Fragment>
      <Heading heading={name} />
      <div className={s.product__list}>{productList}</div>
    </Fragment>
  )
}

export default ProductList
