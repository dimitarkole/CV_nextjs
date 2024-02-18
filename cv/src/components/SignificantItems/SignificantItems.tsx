"use client";
import React, { useState } from 'react';


const SignificantItems: React.FC = () => {
    return (
<section className="feature_area p_120">
  <div className="container">
    <div className="main_title">
      <h2>Significant items</h2>
      <p>Why choose me?</p>
    </div>
    <div className="feature_inner row">
      <div className="col-lg-4 col-md-6">
        <div className="feature_item">
          <i className="flaticon-sketch"></i>
          <h4>WEB DESIGN</h4>
          <p>
            I value simple content structure, clean design patterns, and thoughtful interactions.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="feature_item">
          <i className="flaticon-sketch"></i>
          <h4>WEB DEVELOPMENT</h4>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature_item">
          <i className="flaticon-sketch"></i>
          <h4>RESPONSIVE DESIGN</h4>
          <p>
            50% of people use their phones when they're online, so it's important that
            your site is Mobile Responsive
          </p>
        </div>
      </div>
      <div className="col-lg-2 col-md-2">
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="feature_item">
          <i className="flaticon-sketch"></i>
          <h4>GRAPHIC DESIGN</h4>
          <p>
            I try to look at the work from the point of view of
            consumers and examine how the designs they develop will be perceived by consumers to
            ensure they convey the client's desired message.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature_item">
          <i className="flaticon-sketch"></i>
          <h4>MARKETING SERVICES</h4>
          <p>
            I try to do the best SEO for my clients. I use digital marketing to reach more people.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
};

export default SignificantItems;
