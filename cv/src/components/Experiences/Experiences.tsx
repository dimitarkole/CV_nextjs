"use client";
import React, { useState } from 'react';
import Educations from '../Education/Education';
import Career from '../Career/Career';
import Projects from '../Projects/Projects';

type Tab = 'Tab1' | 'Tab2' | 'Tab3';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('Tab1');

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab);
    };

    return (

        <section className="mytabs_area p_120">
                <div className="container">
                    <div className="tabs_inner">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a
                                    className={activeTab === 'Tab1' ? 'active nav-link' : 'nav-link'}
                                    onClick={() => handleTabClick('Tab1')}
                                    id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    My Experiences
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={activeTab === 'Tab2' ? 'active nav-link' : 'nav-link'}
                                    onClick={() => handleTabClick('Tab2')}
                                >
                                        My Education
                                </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={activeTab === 'Tab3' ? 'active nav-link' : 'nav-link'}
                                onClick={() => handleTabClick('Tab3')}
                            >
                                My Career
                            </a>
                        </li>

                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className={activeTab === 'Tab1' ? 'tab-pane fade show active' : 'tab-pane fade show'} id="home" role="tabpanel" aria-labelledby="home-tab">
                            <Projects />
                            </div>
                            <div className={activeTab === 'Tab2' ? 'tab-pane fade show active' : 'tab-pane fade show'} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <Educations />
                            </div>
                            <div className={activeTab === 'Tab3' ? 'tab-pane fade show active' : 'tab-pane fade show'} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <Career />
                                </div>
                            </div>
                    </div>
                </div>
        </section>
    );
};

export default Tabs;
