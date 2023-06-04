import { FC } from 'react'

interface SingleProductProps {
    image: string;
    title: string;
    price: number
}

const SingleProduct: FC<SingleProductProps> = ({ image, title, price }) => {
  return (
    
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3 product__image">
      <img src={image} alt={title} className="product__image-image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-6 product__name">{title}</p>
      </div>
    </div>

    <div className="content">
       <b>${price}</b> 
    </div>
  </div>
    <button className="button is-medium is-black button__addToCart">Add to cart</button>
</div>
  )
}

export default SingleProduct

