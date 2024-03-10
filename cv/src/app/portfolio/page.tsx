"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import PortfolioProject from '../../components/PortfolioProject/PortfolioProject';

const powerpointPotfolioProjects: PortfolioProjectModel[] = [
    { name: "Grand mather chest tales", hasStar: true, image: "grandmothersFairyTales/1.jpg", link: "grandmothersFairyTales" },
    { name: " Color figures", hasStar: true, image: "colorShapes/1.jpg", link: "colorFigures" },
    { name: "Math hunter for five class", hasStar: true, image: "mathHunterForFiveClass/1.jpg", link: "mathHunterForFifthClass" }
];

const aspNetPotfolioProjects: PortfolioProjectModel[] = [
    { name: "Elibrary", hasStar: false, image: "elibrary/1.jpg", link: "elibrary" },
    { name: "Fligth manager", hasStar: true, image: "fligthManager/1.jpg", link: "fligthManager" },
    { name: "Vacation manager", hasStar: false, image: "vacationManager/1.jpg", link: "vacationManager" },
    { name: "МusicHub", hasStar: true, image: "musicHub/1.jpg", link: "musicHub" },
    { name: "МmusicHubShop", hasStar: false, image: "musicHubShop/1.jpg", link: "musicHubShop" },
    { name: "Rent a car", hasStar: true, image: "rentACar/1.jpg", link: "rentACar" },
    { name: "Ross auto", hasStar: true, image: "rossAuto/1.jpg", link: "rossAuto" },
];

const arduinoPotfolioProjects: PortfolioProjectModel[] = [
    { name: "Dim security System", hasStar: false, image: "dimSecuritySystem/1.jpg", link: "dimSecuritySystem" }
];

const algorithmsPotfolioProjects: PortfolioProjectModel[] = [
    { name: "Algorithms whit C#", hasStar: true, image: "algorithms/1.jpg", link: "algorithms" }
];

const cPlusPlusPotfolioProjects: PortfolioProjectModel[] = [
    { name: "Hotel manager", hasStar: false, image: "hotelManager/1.jpg", link: "hotelManager" },
    { name: "ETable", hasStar: false, image: "eTable/1.jpg", link: "eTable" },
    { name: "Wav Resizer", hasStar: false, image: "wavResizer/1.jpg", link: "wavResizer" }
];

const Page = () => {
    return (
        <section className="home_banner_area">
            <div className="container box_1620">
                <div className="align-items-center">
                    <div className="media row">
                        <h1 className="col-lg-12  justify-content-center text-center">
                            Portfolio
                        </h1>
                      
                        <div className="col-lg-12">
                            <div className="row">
                                <h2 className="col-lg-12">
                                    Power Point presentations
                                </h2>
                                {powerpointPotfolioProjects.map((project, index) => (
                                    <PortfolioProject project={project} key={index} />
                                ))}
                            </div>

                            <div className="row">
                                <h2 className="col-lg-12">
                                    <br /> APS .Net Core - C# and Angular
                                </h2>
                                {aspNetPotfolioProjects.map((project, index) => (
                                    <PortfolioProject project={project} key={index} />
                                ))}
                            </div>

                            <div className="row">
                                <h2 className="col-lg-12">
                                    <br /> Arduino
                                </h2>
                                {arduinoPotfolioProjects.map((project, index) => (
                                    <PortfolioProject project={project} key={index} />
                                ))}
                            </div>

                            <div className="row">
                                <h2 className="col-lg-12">
                                    <br /> Algorithms
                                </h2>
                                {algorithmsPotfolioProjects.map((project, index) => (
                                    <PortfolioProject project={project} key={index} />
                                ))}
                            </div>

                            <div className="row">
                                <h2 className="col-lg-12">
                                    <br /> C/C++
                                </h2>
                                {cPlusPlusPotfolioProjects.map((project, index) => (
                                    <PortfolioProject project={project} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Page