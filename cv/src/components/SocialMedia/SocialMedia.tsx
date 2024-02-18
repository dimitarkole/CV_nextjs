"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const SocialMedia= () => {
    return (
        <ul className="list personal_social">
            <li><a href="https://www.facebook.com/DimKolev2002"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/dimitar_kolev2/"><i className="fa fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/dimitar-kolev-78962a1a1/"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCV7u3p5tZBxJN54yy2hYE2g"><i className="fa fa-youtube-play"></i></a></li>
            <li><a href="https://github.com/dimitarkole"><i className="fa fa-github"></i></a></li>
            <li><a href="https://dev.azure.com/dimkolev2002"><span className="iconify" data-icon="mdi:microsoft-azure-devops"></span></a></li>
        </ul>

    );
};

export default SocialMedia;
