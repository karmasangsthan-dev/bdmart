import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Slider from "react-slick";

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}


const BestSelling = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (event, productId) => {
        setSelectedProduct(productId);
    }
    const handleQunatityIncrement = (id)=>{
        toast(id)
    }
    const handleQunatityDecrement = (id)=>{
        toast(id)
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const productsItem = [
        { _id: 1, img: "/images/card-1.jpg", name: 'Item name A', price: 800, oldPrice: 910, savedPrice: 110 },
        { _id: 2, img: "/images/card-1.jpg", name: 'Item name B', price: 800, oldPrice: 910, savedPrice: 110 },
        { _id: 3, img: "/images/card-1.jpg", name: 'Item name C', price: 800, oldPrice: 910, savedPrice: 110 },
        { _id: 4, img: "/images/card-1.jpg", name: 'Item name D', price: 800, oldPrice: 910, savedPrice: 110 },
        { _id: 5, img: "/images/card-1.jpg", name: 'Item name E', price: 800, oldPrice: 910, savedPrice: 110 },
        { _id: 6, img: "/images/card-1.jpg", name: 'Item name F', price: 800, oldPrice: 910, savedPrice: 110 },
    ]
    return (
        <div>
            <div className="card-header">
                <h1 className='text-center mb-4'>Bestselling items on Rollback</h1>
            </div>
            <Slider className='mb-3 px-4' {...settings}>
                {productsItem.map(item => (
                    <section key={item._id} className="product-link">
                        <div className="product p-3">
                            <picture>
                                <img src={item.img} alt="" />
                            </picture>
                            <div className="main-detail ">
                                <div className="item-name">{item.name}</div>
                            </div>
                            <div className="item-price">{item.price}.00$</div>
                            <div className="old-price"><del>{item.oldPrice}.00$</del></div>
                            <div className="save-price">{item.savedPrice}.00$</div>
                            <div id="cart-btn" className="cart-btn">
                                {selectedProduct === item._id ? (
                                    <div className="plus-btn">
                                        <span onClick={()=>handleQunatityDecrement(item?._id)} className="remove-btn"><i className="fas fa-minus"></i></span>
                                        <span id="cart-num-3">1</span>

                                        <span onClick={()=>handleQunatityIncrement(item?._id)} className="add-btn"><i className="fas fa-plus"></i></span>
                                    </div>
                                ) : (
                                    <button onClick={(event) => handleAddToCart(event, item._id)}>Add to Cart<i className="far plus-ico fa-plus-square"></i></button>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </Slider>
        </div>
    );

}

export default BestSelling;
