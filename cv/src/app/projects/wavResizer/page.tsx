import ImageSlider from "../../../components/Slider/Slider";

const images = [1].map((n) => `/img/Projects/eTable/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">ETable</h3>
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
                            Main purpose: <span id="purpose">A console project</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson"></span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">C++</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">20 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2023</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://github.com/kolev02/auto">Here</a></span> |  <a href=" https://kolev02.github.io/auto/">Test it</a>
                        </p>
                        <p>
                            Awards:  N/A
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    Ross Auto" is an online platform specializing in offering a wide selection of cars
                    from current auctions in the United States, presented to users at competitive prices.
                    Our mission is to connect car collectors, professional traders, and everyday car enthusiasts
                    with the best automotive auctions worldwide.<br />
                    Key Features and Characteristics:
                </p>

               
            </div>
        </div>

    );
}
export default page