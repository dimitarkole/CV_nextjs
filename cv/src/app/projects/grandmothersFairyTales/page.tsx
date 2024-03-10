import ImageSlider from "../../../components/Slider/Slider";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10].map((n) => `/img/Projects/grandmothersFairyTales/${n}.jpg`);

const page = () => {
    return (
     
                    <div className="media row">
                        <div className="col-md-12 personal_text">
                            <h3 id="projectName">Grandma's chets tales</h3>
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
                                        Main purpose: <span id="purpose">To make kids happier</span>
                                    </p>
                                    <p>
                                        Target person: <span id="targetPerson">Kids 4-8 years old</span>
                                    </p>
                                    <p>
                                        Tech stack: <span id="techStack">Power Point</span>
                                    </p>

                                    <p>
                                        Working hours: <span id="workingHours">326 hours</span>
                                    </p>
                                    <p>
                                        Year: <span id="year">2012-2013</span>
                                    </p>
                                    <p>
                                        Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/Tales%20from%20Grandmas%20Chest">Here</a></span>
                                    </p>
                                    <p>
                                        Awards: <span id="awards">Second place at the autumn IT tournament 'John Atanasov' 2012</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h4>Project desctiption</h4>
                            <p id="desctiption">
                                &emsp;Every child loves tales. When I was little,
                                I decided to create the Grandma's Chest Tales project. This product aims to
                                present favourite children's stories in an interesting way.
                                It can be successfully used by parents to introduce their children to
                                favourite fairy tale characters. The main purpose of the project is to entertain,
                                but watching the fairy tales, each viewer can learn hardworking, polite.
                                For this reason, they are also suitable for primary school students and
                                can be used in extracurricular reading and className hours. This project has 5 animated popular tales.
                                I used Power Point to make them.
                            </p>
                            <br />&emsp;The tales are:
                            <ul>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=XAYsqycvBeY">Grandpa pulls out a turnip</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=Fkq_1_2nixk">The stone and the snake</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=fB6qpyYWc_4">The bad word</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=22oqc1pDAro">The fox and the stork</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=DW_j7WlChJU">Slavery</a>
                                </li>
                            </ul>
                        </div>
                    </div>
              
    );
}
export default page