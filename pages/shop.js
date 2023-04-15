import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Rating, Slider } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

export async function getServerSideProps(context) {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}

const shop = ({ data }) => {
    const [value, setValue] = useState([0, 150]);
    const brands = data?.products?.map(product => product.brand);
    const category = data?.products?.map(product => product.category);
    const handleOnChange = (event, newValue) => {
        setValue(newValue);
        if (typeof onChange === 'function') {
            onChange(newValue);
        }
    };

    return (
        <Layout>
            <div>
                <div className="shop page-content">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-10">
                                <div className="widget widget-clean justify-content-between">
                                    <span>Showing 4 of 4 Products</span>
                                    <div>
                                        <span>Sort by:</span>

                                    </div>
                                </div>
                                <div className="products">
                                    <div className="shop-products">
                                        {
                                            data?.products?.map((d) => {
                                                return (
                                                    <div key={d?.id} className='shop-single-product'>
                                                        <figure className='product-media'>
                                                            <span className="product-label label-top">Top</span>
                                                            <Link style={{ marginTop: '-21px' }} href='/shop'>
                                                                <div style={{ width: '217px', height: '217px' }}>
                                                                    <Image
                                                                        width={217}
                                                                        height={217}
                                                                        src={d?.thumbnail}
                                                                        className=""
                                                                        alt=""

                                                                    />

                                                                    <button onClick={(e) => {
                                                                        e.preventDefault();
                                                                        toast.success('product added in cart');

                                                                    }} className='shop-add-to-cart-button'>Add to Cart<i class="far plus-ico fa-plus-square" aria-hidden="true"></i></button>



                                                                </div>
                                                            </Link>
                                                        </figure>
                                                        <div className="product-body">
                                                            <div className="product-cat">
                                                                <Link href="/shop/?category=fruit">
                                                                    {d?.category}
                                                                </Link>
                                                            </div>
                                                            <div className="product-title">
                                                                <Link href="/shop/?category=fruit">
                                                                    {d?.title}
                                                                </Link>
                                                            </div>
                                                            <div className="product-price d-flex gap-2 justify-content-center">
                                                                <div className="new-price">
                                                                    <p>${d?.price}</p>
                                                                </div>
                                                                <div className="shop-old-price">
                                                                    <p>$45</p>
                                                                </div>
                                                            </div>
                                                            <div className="ratings-container mb-3">
                                                                <div className="ratings">
                                                                    <Rating name="read-only" value={parseInt(d?.rating)} readOnly />
                                                                </div>
                                                                <div className="ratings-texts">
                                                                    ( 2 Reviews )
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <aside className='col-lg-2 order-lg-first'>
                                <div className="sticky-content">
                                    <aside className='sidebar sidebar-shop'>
                                        <div>
                                            <div className="widget  widget-clean">
                                                <label htmlFor="filter">Filter:</label>
                                                <a className="sidebar-filter-clear" href="#">Clean All</a>
                                            </div>
                                            <div style={{ borderBottom: "0.1rem solid #ebebeb" }} className="shop-categories mb-3 pb-2">
                                                <div className="d-flex justify-content-between align-items-center">

                                                    <h5>Category</h5>
                                                    <i className="fa fa-caret-down"></i>
                                                </div>
                                                {
                                                    category?.map(cat => <li >{cat}</li>)
                                                }
                                                

                                            </div>
                                            <div style={{ borderBottom: "0.1rem solid #ebebeb" }} className='mb-3 pb-2'>
                                                <div className="d-flex justify-content-between align-items-center">

                                                    <h5>Size</h5>
                                                    <i className="fa fa-caret-down"></i>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="extra-small" />
                                                    <label className="form-check-label" for="extra-small">
                                                        Extra Small
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="small" />
                                                    <label className="form-check-label" for="small">
                                                        Small
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="medium" />
                                                    <label className="form-check-label" for="medium">
                                                        Medium
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="large" />
                                                    <label className="form-check-label" for="large">
                                                        Large
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="extra-large" />
                                                    <label className="form-check-label" for="extra-large">
                                                        Extra Large
                                                    </label>
                                                </div>
                                            </div>
                                            {/* brand  */}
                                            <div style={{ borderBottom: "0.1rem solid #ebebeb" }} className='mb-3 pb-2'>
                                                <div className="d-flex justify-content-between align-items-center">

                                                    <h5>Brand</h5>
                                                    <i className="fa fa-caret-down"></i>
                                                </div>
                                                {
                                                    brands?.map((b) => {
                                                        return <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="next-brand" />
                                                            <label className="form-check-label" for="next-brand">
                                                                {b}
                                                            </label>
                                                        </div>
                                                    })
                                                }


                                            </div>
                                            {/* price range  */}

                                            <div style={{ borderBottom: "0.1rem solid #ebebeb" }} className='mb-3 pb-2s'>
                                                <div className="d-flex justify-content-between align-items-center">

                                                    <h5>Price</h5>
                                                    <i className="fa fa-caret-down"></i>
                                                </div>
                                                <div>
                                                    <div className="price-range-slider">
                                                        <div className="d-flex justify-content-between">

                                                            <h6>Price Range: ${value[0]} - ${value[1]}
                                                            </h6>
                                                            <span>filter</span>
                                                        </div>
                                                        <Slider
                                                            value={value}
                                                            onChange={handleOnChange}
                                                            valueLabelDisplay="auto"
                                                            min={0}
                                                            max={150}

                                                            color="primary"
                                                        />

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </aside>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default shop;