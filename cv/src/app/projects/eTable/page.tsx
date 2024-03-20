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
                            Main purpose: <span id="purpose">Aims to collect grid data.</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">Person who want to collect data in grid system</span>
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
                            Source code: <span id="sourceCode"><a href="https://github.com/dimitarkole/ETable">Here</a></span>
                        </p>
                        <p>
                            Raiting: <span id="awards">5.54/6 Sofia University, major in computer science</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    &emsp;The system collect grid data as numbers, float numbers, strings and formulas. Code is covered with tests.
                </p>
            </div>
        </div>

    );
}
export default page