import ImageSlider from "../../../components/Slider/Slider";

const images = [1].map((n) => `/img/Projects/musicHubShop/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">MusicHub shop</h3>
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
                            Main purpose: <span id="purpose">Aims to make a online shop to MusicHub platform</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">Musichub users</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">ASP .Net Core, C#, EntityFramework, Angular, SendGrid</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">50 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2020</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/MusicHub%20Onlince%20Shop">Here</a></span>
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
                    Many people have fun listening to music.
                    So, I decided to help them by making a website where users could upload their musics as well as listen to other users' songs and rate them.
                    I think it would be amazing if my platform has a online shop.
                    The result for the end customer is amazing thing which is branded by MusicHub.
                </p>
                <br/>
            </div>
        </div>

    );
}
export default page