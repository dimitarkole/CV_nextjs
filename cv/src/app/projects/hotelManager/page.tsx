import ImageSlider from "../../../components/Slider/Slider";

const images = [1].map((n) => `/img/Projects/hotelManager/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Hotel manager</h3>
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
                            Main purpose: <span id="purpose">Aims to manage hotel data.</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">Hotels</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">C++</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">45 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2020</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://github.com/dimitarkole/Hotel">Here</a></span>
                        </p>
                        <p>
                            Raiting: <span id="awards">5.46/6 Sofia University, major in computer science</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    &emsp;The system collect hotel data - rooms, reservation and closed room.
                </p>
            </div>
        </div>

    );
}
export default page