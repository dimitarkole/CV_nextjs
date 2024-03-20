import ImageSlider from "../../../components/Slider/Slider";

const images = [1, 2, 3, 4].map((n) => `/img/Projects/dimSecuritySystem/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Dim security system</h3>
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
                            Main purpose: <span id="purpose">Aims to secure house, office, ect.</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">A man who wants to be protected</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">Arduiono uno</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">5 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2020</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/Dim%20Security%20System">Here</a></span>
                        </p>
                        <p>
                            Awards: <span id="awards">100/100 points at examp in "IT career" course</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    &emsp;Many people and firm has a problem with security. I diceded to help them with my project DimSecurity system.
                    It is a Arduino project which protect them from robbers and murders.
                    I developed my solution on Tinkercad.
                    You could check my work here:
                    https://www.tinkercad.com/things/8RHFvR6886e-copy-of-copy-of-copy-of-super-hillar/editel?tenant=circuits
                </p>
                <br/>
                    &emsp;Project
                    <ul>
                        <li><a href="https://youtu.be/izwVOfpoLVw?t=0">Intro</a></li>
                        <li><a href="https://youtu.be/izwVOfpoLVw?t=17">Purpose</a></li>
                        <li><a href="https://youtu.be/izwVOfpoLVw?t=69">Components</a></li>
                        <li><a href="https://youtu.be/izwVOfpoLVw?t=90">Block scheme</a></li>
                        <li><a href="https://youtu.be/izwVOfpoLVw?t=121">Source code</a></li>
                        <li><a href="https://youtu.be/izwVOfpoLVw?t=184">Demonstration</a></li>
                        <li><a href="https://youtu.be/izwVOfpoLVw?t=385">Final</a></li>
                    </ul>
            </div>
        </div>

    );
}
export default page