import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import QuantitySelector from "../components/QuantitySelector";
import StarRating from '../components/StarRating';
import LikedButton2 from '../components/LikedButton2';
import { GoChevronLeft } from "react-icons/go";
import { Link } from 'react-router-dom';
import '../styles/productDescription.css'

const ProductDescription = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const [displayedImage, setDisplayedImage] = useState('');
  const { addToCart } = useContext(CartContext);

  const boxes = [
    { id: 1, label: 'Box 1', img: '../assets/green apple.svg', displayImg: '../assets/big apple.svg' },
    { id: 2, label: 'Box 2', img: '../assets/red apple.svg', displayImg: '../assets/red apple.svg' },
    { id: 3, label: 'Box 3', img: '../assets/three apple.svg', displayImg: '../assets/three apple.svg' },
    { id: 4, label: 'Box 4', img: '../assets/red apple3.svg', displayImg: '../assets/red apple3.svg'  },
  ];
  const descripImages = [
    { id: 1, label: 'Box 1', img: '../assets/green apple2.svg'},
    { id: 2, label: 'Box 2', img: '../assets/red apple2.svg'},
  ];

  const handleBoxClick = (box) => {
    setSelectedBox(box.id);
    setDisplayedImage(box.displayImg);
  };

  const prices =[
    {id: 1, price: '500.00', quantity: 1},
    // {id: 2, price: 500, quantity: 2},
    // {id: 3,price: 500, quantity: 3},
  ]

  return (
    <div className="product-description-container">
      <div className="product-description-container">
        <div className="head1">
         <Link to={`/pages/ProductPage`} className='link'><button><GoChevronLeft className='arrow-left'/> Back</button></Link>
        </div>
        <div className='all-box'>
          <div className='big-box'>
            <LikedButton2 className='heart2' />
            {displayedImage && (
              <div className='big-box'>
                <img src={displayedImage} alt="Selected" />
              </div>
            )}
          </div>
           
          <div className='small-boxes'>
            {boxes.map((box) => (
              <div
                key={box.id}
                className={`small-box ${selectedBox === box.id ? 'selected' : ''}`}
                onClick={() => handleBoxClick(box)}
              >
                <img src={box.img} alt={box.label} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='contents'>
        <div className='text'>
          <h1>Fresh Green Apple</h1>
          <div className='review'>
            <StarRating totalStars={5} />
            <p>42 reviews</p>
          </div>
          <div className='text2'>
            <h2>Product Description</h2>
            <p>
            Indulge in the crisp sweetness of our fresh apples, <br/> 
            carefully hand-picked to ensure maximum flavor <br/>
            and nutrition. 
            </p>
            <div className='price'>
              {prices.map((price) => (
                <div
                  key={price.id}
                >
                  <p>N{price.price}</p>
                </div>
              ))}
              </div>
            </div>
            <div className='descrip-color'>
              <div className='descrip'>
                <p>Color</p>
                <ul><li>Green</li></ul>
              </div>
              <div className='descrip-color-images'>
                {descripImages.map((descripImage) => (
                  <div
                    key={descripImage.id}
                    className={`descrip-color-image ${selectedBox === descripImage.id ? 'selected' : ''}`}
                    onClick={() => handleBoxClick(descripImage)}
                  >
                    <img src={descripImage.img} alt={descripImage.label} />
                  </div>
                ))}
              </div>
            </div>
            <div className='quantity'>
              <p>Quantity</p>
              <QuantitySelector minQuantity={1} />
            </div>
            <div className='des-btns'>
              <button className='cart2'>Add to Cart</button>
              <button className='buy'>Buy Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription













