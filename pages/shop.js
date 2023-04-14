import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Slider } from '@mui/material';

const shop = () => {
    const [value, setValue] = useState([0, 150]);

    const handleOnChange = (event, newValue) => {
        setValue(newValue);
        if (typeof onChange === 'function') {
            onChange(newValue);
        }
    };

    return (
        <Layout>
            <div>
                <div className="page-content">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-9">
                                <div className="widget widget-clean justify-content-between">
                                    <span>Showing 4 of 4 Products</span>
                                    <div>
                                        <span>Sort by:</span>

                                    </div>
                                </div>
                            </div>
                            <aside className='col-lg-3 order-lg-first'>
                                <div className="sticky-content">
                                    <aside className='sidebar sidebar-shop'>
                                        <div>
                                            <div className="widget  widget-clean">
                                                <label htmlFor="filter">Filter:</label>
                                                <a class="sidebar-filter-clear" href="#">Clean All</a>
                                            </div>
                                            <div style={{ borderBottom: "0.1rem solid #ebebeb" }} className="categories">
                                                <div className="d-flex justify-content-between">

                                                    <h5>Category</h5>
                                                    <i class="fa fa-caret-down"></i>
                                                </div>
                                                <li>Furniture</li>
                                                <li>Coffe</li>
                                                <li>Lighting</li>
                                                <li>Decoration</li>
                                                <li>Electronics</li>
                                                <li>Sofa & bed</li>

                                            </div>
                                            <div style={{ borderBottom: "0.1rem solid #ebebeb" }}>
                                                <div className="d-flex justify-content-between">

                                                    <h5>Size</h5>
                                                    <i class="fa fa-caret-down"></i>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="extra-small" />
                                                    <label class="form-check-label" for="extra-small">
                                                        Extra Small
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="small" />
                                                    <label class="form-check-label" for="small">
                                                        Small
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="medium" />
                                                    <label class="form-check-label" for="medium">
                                                        Medium
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="large" />
                                                    <label class="form-check-label" for="large">
                                                        Large
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="extra-large" />
                                                    <label class="form-check-label" for="extra-large">
                                                        Extra Large
                                                    </label>
                                                </div>
                                            </div>
                                            {/* color  */}
                                            <div style={{ borderBottom: "0.1rem solid #ebebeb" }}>
                                                <div className="d-flex justify-content-between">

                                                    <h5>Brand</h5>
                                                    <i class="fa fa-caret-down"></i>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="next-brand" />
                                                    <label class="form-check-label" for="next-brand">
                                                        Next
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="nike" />
                                                    <label class="form-check-label" for="nike">
                                                        Nike
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="geox" />
                                                    <label class="form-check-label" for="geox">
                                                        Geox
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="marcel" />
                                                    <label class="form-check-label" for="marcel">
                                                        Marcel
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="nokia" />
                                                    <label class="form-check-label" for="nokia">
                                                        Nokia
                                                    </label>
                                                </div>
                                            </div>
                                            {/* price range  */}

                                            <div style={{ borderBottom: "0.1rem solid #ebebeb" }}>
                                                <div className="d-flex justify-content-between">

                                                    <h5>Price</h5>
                                                    <i class="fa fa-caret-down"></i>
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