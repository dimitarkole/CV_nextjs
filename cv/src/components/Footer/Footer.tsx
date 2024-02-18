import Image from 'next/image';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = () => {
    const today = new Date();
    return (
        <footer className="footer_area p_120">
            <div className="container">
                <div className="row footer_inner">
                    <div className="col-lg-9">
                        <aside className="f_widget ab_widget">
                            <div className="f_title">
                                <h3>About Me</h3>
                            </div>
                            <p>
                            </p>

                        </aside>
                    </div>
                    <div className="col-lg-2">
                        <aside className="f_widget social_widget">
                            <div className="f_title">
                                <h3>Follow Me</h3>
                            </div>
                            <p>Let us be social</p>
                            <SocialMedia></SocialMedia>
                        </aside>
                </div>
            </div>
            <div className="col-lg-12 col-sm-12 text-center">
                <aside className="f_widget social_widget">

                    <p>
                        Copyright &copy;{today.getFullYear()} | 
                        All rights reserved
                    </p>
                </aside>
            </div>
        </div>
</footer >

)}

export default Footer
