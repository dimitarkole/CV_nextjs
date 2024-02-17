import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import ImageSlider from '../Slider/Slider';

const Navbar = () => {
    const images = [
        '/img/personal1.jpg',
        '/img/personal2.jpg',
    ];
    return (
        <section className="home_banner_area">
            <div className="container box_1620">
                <div className="banner_inner d-flex align-items-center">
                    <div className="media row">
                        <div className="col-md-7">
                            <ImageSlider images={images} />
                        </div>
                        <div className="col-md-5">
                            <div className="personal_text">
                                <h6>Hello Everybody, i am</h6>
                                <h3>Dimitar Kolev</h3>
                                <h4>Full stack developer with .NET C# and Angular</h4>
                                <div>
                                    &emsp;My name is Dimitar Kolev and I am born in 26/03/2002.
                                    Currently I am a student in Sofia university.
                                    I finished my High School education at PPMG Vasil Levski - Smolyan.
                                    What is more, when I was at 10 className, I enterned  at
                                    <a href="https://it-kariera.mon.bg/e-learning/">IT Carrier</a> - natioanal program. I graduated with honors from this program<br/>
                                        &emsp;My favourite programming language is C#, but I also like programming in JavaScript/TypeScript.<br/>
                                            &emsp;I am sociable and reliable person.
                                            I like learning new things every day.
                                            I like helping others and share my knowledge with them about everything that interests me about technologies.
                                </div>
                                <ul className="list basic_info">
                                    <li><a href="#"><i className="lnr lnr-calendar-full"></i> 26st March, 2002</a></li>
                                    <li><a href="#"><i className="lnr lnr-phone-handset"></i> +359 879 370 998</a></li>
                                    <li><a href="#"><i className="lnr lnr-envelope"></i> dim_kolev2002@abv.bg</a></li>
                                    <li><a href="#"><i className="lnr lnr-home"></i>Smolian, Bulgaria</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
)}

export default Navbar