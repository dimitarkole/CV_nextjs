"use client";
import React, { useState } from 'react';

let projects = [
    { name: "Grandmother fairy tales", description: "Five animated power point presentations", period: "2013", projectPage: "grandmothersFairyTales" },
    { name: "Color figures", description: "Animated presentations with game", period: "2013-2014", projectPage: "colorFigures" },
    { name: "Math hunter for fifth class", description: "Animated power point presentation with math calculator", period: "2014-2015", projectPage: "mathHunterForFifthClass" },
    { name: "ELibry", description: "ASP .Net Core - C# web platform", period: "2019-2020", projectPage: "elibrary" },
    { name: "Dim Securety system", description: "Ardoino project", period: "2020", projectPage: "dimSecuritySystem" },
    { name: "Algorithms", description: "C# algorithms tasks", period: "2021", projectPage: "algorithms" },
    { name: "Flight manager", description: "ASP .Net Core - C# web platform", period: "2021", projectPage: "fligthManager" },
    { name: "Vacation manager", description: "ASP .Net Core - C# web platform", period: "2021", projectPage: "vacationManager" },
    { name: "Music hub", description: "ASP .Net Core - C# web platform", period: "2020-2022", projectPage: "musicHub" },
    { name: "MusicHub Shop", description: "ASP .Net Core - C# web platform", period: "2021", projectPage: "musicHubShop" },
    { name: "Rent a car", description: "ASP .Net Core - C# web platform", period: "2021", projectPage: "rentACar" },
];

const Projects: React.FC = () => {
    return (
        <ul className="list">
            {projects.map((item, index) => (
                <li key={index}>
                    <div className="media">
                        <div className="d-flex">
                            <p>{item.period}</p>
                        </div>
                        <div className="media-body">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul >
    )
};

export default Projects;
