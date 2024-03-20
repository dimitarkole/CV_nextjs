import ImageSlider from "../../../components/Slider/Slider";

const images = [1].map((n) => `/img/Projects/rossAuto/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Ross auto</h3>
            </div>
            <div className="col-md-6">
                <ImageSlider images={images} imageClassName="h-[400px] w-full" />
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Project info</h4>
                    </div>

                    <div className="col-md-12">
                        <p>
                            Main purpose: <span id="purpose">A web platform for selling cars by auction in the USA</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson"></span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">Only angular</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">50 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2023</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://github.com/kolev02/auto">Here</a></span> |  <a href=" https://kolev02.github.io/auto/">Online here</a>
                        </p>
                        <p>
                            Awards:  N/A
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    Ross Auto" is an online platform specializing in offering a wide selection of cars
                    from current auctions in the United States, presented to users at competitive prices.
                    Our mission is to connect car collectors, professional traders, and everyday car enthusiasts
                    with the best automotive auctions worldwide.<br />
                    Key Features and Characteristics:
                </p>

                <ol>
                    <li>Variety of Cars: "Ross Auto" provides a diverse range of cars of all types and brands,
                        including new, used, classic, cars with history, and limited editions.
                        Users can search for cars by brand, model, year of manufacture, and other criteria.</li>
                    <li>Comprehensive Historical Overview: Our website offers a detailed history for each car, including information about previous owners, service history, and results from previous auctions. This helps potential buyers make informed decisions.</li>
                    <li>Real-time Auctions: Users can participate in live auctions conducted online. They can place bids and monitor the auction's progress in real time, as well as consult with experts on-site.</li>
                    <li>Expert Consultations: "Ross Auto" provides users with the opportunity to consult with professional automotive experts who can offer valuable advice and evaluations for the cars of interest.</li>
                    <li>Security and Trust: We ensure that every car listed on our website undergoes an inspection and complies with legal requirements. We also provide insurance and services for checking the cars' history.</li>
                    <li>Easy Buying Process: Users can easily purchase cars through our website using secure and convenient payment methods.</li>
                </ol>
                <p id="desctiption">
                    Whether you're a collector searching for a unique classic car or an everyday consumer looking for great deals, "Ross Auto" is your reliable partner when buying cars from current auctions in the USA. We combine a rich variety with security and convenience to provide you with the best experience in searching for and buying your next car.
                </p>
            </div>
        </div>

    );
}
export default page