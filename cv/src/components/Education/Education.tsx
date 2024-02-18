"use client";
import React, { useState } from 'react';

let educations = [
    { period: "Oct 2011 to June 2012", what: "Algorithms tasks with C++", where: "Telerik Kids Academy" },
    { period: "Aug to Sep 2016", what: "Cloud IT", where: "Minyu Balkanski" },
    { period: "Sep 2016 to June 2021", what: "Speciality – Math, Informatics, English", where: "High school “Vasil Levski” – Smolyan" },
    { period: "Aug 2017", what: "Robotics", where: "Minyu Balkanski" },
    { period: "Oct 2018 to June 2021", what: "C# Developer", where: "National program Education for IТ Carrier" },
    { period: "Sep 2018 to Jan 2020", what: "C# Web Developer", where: "Software University" },
    { period: "Sep 2020 to Nov 2020", what: "Digital marketing", where: "Software University" },
    { period: "Nov 2021 to June 2022", what: "Computer science", where: "Sofia University" },
    { period: "Sep 2022 to present", what: "Cyber security", where: "Technical University" }
];

const Educations: React.FC = () => {
    return (
            <ul className="list">
                {educations.map((item, index) => (
                    <li key={index}>
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

export default Educations;
