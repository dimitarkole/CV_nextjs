"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link"
interface PortfolioProjectItemProps {
    project: PortfolioProjectModel;
}

const PortfolioProject: React.FC<PortfolioProjectItemProps> = ({ project }) => {
    return (
        <Link href={"/projects/"+project.link} className="navbar-brand logo_h">
            <div className="col-md-4" >
                <div className="card text-dark">
                    <div className="imgBx">
                        <Image className='project-image' src={"/img/Projects/" + project.image} alt="site-logo" width={300} height={300} />
                        {project.hasStar &&
                            <h1 className="star" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </h1>
                        }
                    </div>
                    <div className="contentBx">
                        <h3>{project.name}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default PortfolioProject