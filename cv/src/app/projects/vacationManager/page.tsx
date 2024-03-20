import ImageSlider from "../../../components/Slider/Slider";

const images = [1].map((n) => `/img/Projects/vacationManager/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Vacation manager</h3>
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
                            Main purpose: <span id="purpose">Aims to make firm organization better</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">Firm</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">ASP .Net Core, C#, EntityFramework, Razer</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">15 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2021</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/VacationManager">Here</a></span>
                        </p>
                        <p>
                            Awards: <span id="awards">N/A</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    &emsp;Vacation Manager is a system that aims to do everything in vacation in firm.
                </p>
            </div>
        </div>
    );
}
export default page