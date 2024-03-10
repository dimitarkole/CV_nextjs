import ImageSlider from "../../../components/Slider/Slider";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `/img/Projects/colorShapes/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Color figures</h3>
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
                            Main purpose: <span id="purpose">To teach kids of colors and figures</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">Kids 4-8 years old</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">Power Point</span>
                        </p>

                        <p>
                            Working hours: <span id="workingHours">250</span>
                        </p>
                        <p>
                            Year: <span id="year">2013-2014</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/Color%20figures">Here</a></span>
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
                    &emsp;Many children do not know colors and shapes very well.
                    I decided to help them with my project "Color shapes".
                    This Power Point presentation aims to teach them what color and shapes exist.
                    It can be successfully used in class by kindergarten.
                    Also, there is simple game - users could test their knowledge.
                    <br/><br/>&emsp;View project here:
                    </p>
                    <ul>
                        <li>

                            <a href="https://www.youtube.com/watch?v=UHSWwxrjxvs">Lessons</a>
                        </li>
                        <li><a href="https://www.youtube.com/watch?v=r1hIzfrftjg">Game</a></li>
                    </ul>
                </div>
        </div>
    );
}
export default page