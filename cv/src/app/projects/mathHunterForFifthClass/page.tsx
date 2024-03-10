import ImageSlider from "../../../components/Slider/Slider";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10].map((n) => `/img/Projects/mathHunterForFiveClass/${n}.jpg`);

const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Math hunter for fifth class</h3>
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
                            Main purpose: <span id="purpose">To teach student mathematics</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">Fifth graders</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">Power Point</span>
                        </p>

                        <p>
                            Working hours: <span id="workingHours">360 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2014-2015</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/Math%20hunter%20for%20fifth%20class">Here</a></span>
                        </p>
                        <p>
                            Awards: <span id="awards">Third place at the autumn IT tournament 'John Atanasov' 2014</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    &emsp;Many fifth graders have problems with mathematics.
                    I decided to help them with my project “Math hunter for fifth grade”.
                    This Power Point presentation aims to teach them with interested and happy
                    math problems. It can be successfully used in class by teacher.
                    Lessons are divided by modules and topic. Users could read info of
                    the lesson after its end. Also, in the end of each lesson users could
                    test their knowledge. In fact, the project can resolve basic math problems.
                    What is more, each module has contest with random generated questions.
                    Teacher could download it and test knowledge of them students.
                </p>
                <br/>&emsp;The lessons are:
                    <ul>
                        <li>
                            Algebra<ul>
                                <li>
                                    Оrdinary fractions<ul>
                                        <li><a href="https://www.youtube.com/watch?v=byUI1xgYp0Y">Essence</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=pqc_Nxj7J10">Types</a></li>
                                        <li>
                                            <a href="https://www.youtube.com/watch?v=pneMveMzIII">Comparison</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/watch?v=5A24bYpw2QQ">Аddition and subtraction</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/watch?v=V916acBMD-A">Multiplication and division</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>Decimal fractions<ul><li><a href="https://www.youtube.com/watch?v=1tY1taoAJy8">Essence</a></li><li><a href="https://www.youtube.com/watch?v=ICzT1TPBfKI">Аddition</a></li><li><a href="https://www.youtube.com/watch?v=2bgdWa9a6dw">Subtraction</a></li><li><a href="https://www.youtube.com/watch?v=czej-nobIlc">Multiplication</a></li><li><a href="https://www.youtube.com/watch?v=jIuNA0Kl3oA">Division</a></li></ul></li>
                            </ul>
                        </li>
                        <li>
                            Geometry<ul>
                                <li><a href="https://www.youtube.com/watch?v=FQJv3FSb4Vs">Triangle</a></li>
                                <li><a href="https://www.youtube.com/watch?v=aoCalhGnRr4">Comparator</a></li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=pUtrQqaLofo">Trapeze</a>
                                </li>
                                <li><a href="https://www.youtube.com/watch?v=NO0iytKT0Ak">Cube</a></li>
                                <li><a href="https://www.youtube.com/watch?v=g9PQS_sm8Lk">Parallelepiped</a></li>
                            </ul>
                        </li>
                    </ul>
            </div>
        </div>
    );
}
export default page