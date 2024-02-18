"use client";
import React, { useState } from 'react';

let cariers = [
    { period: "14 May 2022 to present", what: ".Net & PHP & SQL", where: "Eurosys" },
];

const Career: React.FC = () => {
    return (
        <ul className="list">
            {cariers.map((item, index) => (
                <li key={index}>
                    <span></span>
                    <div className="media">
                        <div className="d-flex">
                            <p>{item.period}</p>
                        </div>
                        <div className="media-body">
                            <h4>{item.where}</h4>
                            <p>{item.what}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul >
    );
};

export default Career;
