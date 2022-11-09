import { Fragment } from 'react'
import {Category} from '../../types/Types'
import ProductListItem from './ProductListItem'
import s from './ProductList.module.scss'

const ProductList = ({category}: {category: Category} ) => {

  const {name, products} = category

  const productList = products.map(product => {
    const {id, name, price, images, description} = product
    return <ProductListItem key={`${id}__product_key`} description={description} id={id} name={name} price={price} image={images[0]}/>
  })

  return (
    <Fragment>
      <h2 className={s.category__name}>{name}</h2>
      <div className={s.product__list}>
      {productList}
      </div>
    </Fragment>
  )
}

export default ProductList
