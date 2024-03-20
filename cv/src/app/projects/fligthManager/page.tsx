import ImageSlider from "../../../components/Slider/Slider";

const images = [1, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `/img/Projects/fligthManager/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Fliht manager</h3>
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
                            Main purpose: <span id="purpose">Aims to do everything in flights management</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">Fliht passsagers</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">ASP .Net Core, C#, EntityFramework, Razer</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">20 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2021</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/_git/Flight%20Manager">Here</a></span>
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
                    &emsp;Flight Manager is a system that aims to do everything in flights management. It can control flight routes,
                    passengers, tickets and etc. The web aplication gives the possibility to track flights with specific information of the people that are on board. Easy to use and appealing to the eye, it has everything that you need.
                </p>
                <br/>
                    &emsp;Project
                    <ul>
                        <li><a href="https://youtu.be/WJ0rdfoLE8c?t=0">Intro</a></li>
                        <li><a href="https://youtu.be/WJ0rdfoLE8c?t=12">Purpose</a></li>
                        <li><a href="https://youtu.be/WJ0rdfoLE8c?t=54">Used texnologics</a></li>
                        <li><a href="https://youtu.be/WJ0rdfoLE8c?t=95">Project development</a></li>
                        <li><a href="https://youtu.be/WJ0rdfoLE8c?t=129">Demonstration - user with administrator role</a></li>
                        <li><a href="https://youtu.be/WJ0rdfoLE8c?t=327">Demonstration - buying a ticket</a></li>
                        <li><a href="https://youtu.be/WJ0rdfoLE8c?t=457">Sending emails</a></li>
                        <li><a href="https://youtu.be/WJ0rdfoLE8c?t=497">Code review</a></li>
                        <li><a href="https://youtu.be/WJ0rdfoLE8c?t=883">Unit tests</a></li>
                    </ul>
            </div>
        </div>
    );
}
export default page