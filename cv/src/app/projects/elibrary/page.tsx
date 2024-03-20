import ImageSlider from "../../../components/Slider/Slider";

const images = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/img/Projects/elibrary/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Elibrary</h3>
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
                            Main purpose: <span id="purpose">Facilitating the work of the librarian</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">Libraries</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">ASP .Net Core with C#</span>
                        </p>

                        <p>
                            Working hours: <span id="workingHours">321 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2019-2020</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/ELibrary">Here</a></span>
                        </p>
                        <p>
                            Awards: <span id="awards"></span>
                        </p>
                    </div>
                </div>
            </div>
            <div clclassNameass="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    &emsp;Many libraries have trouble combining and summarizing the
                    information of individual activities.
                    I decided to help them by creating a platform where they couldorganize and summarize
                    the information.
                    Based on this information, they receive different typesof reports.
                    The results for them are fewer or no missing books from different readers,
                    and anincrease in the flow of readers to the library.
                    Any library can add a book to this collection.
                    Once the book has been added, it can be read to a registered reader.
                    Once he has read it, the librarian can mark it back by clicking
                    on a book return button from a reader.
                    The benefit for the reader is that he can keep
                    track of how many books he has read.
                </p>
                <br/>&emsp;You could watch my work here:
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/watch?v=FP80eIgtu9A">All work</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=8sVfE1GKr5w">Home page</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=OZyzL3GEILo">Create a genre</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=QTJqa7K5OVA">Edit and remove a genre</a>
                        </li>
                        <li><a href="https://www.youtube.com/watch?v=Rb0QAtpOnjk">Create a book</a></li>
                        <li><a href="https://www.youtube.com/watch?v=iknr4y84Z68">Edit and remove a book</a></li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=AJC4Q0ASeLc">Give a book</a>
                        </li>
                        <li><a href="https://www.youtube.com/watch?v=cLoAu8e51vU">Return a book</a></li>
                        <li><a href="https://www.youtube.com/watch?v=IMBCPbd7RBA">Libraty statistics</a></li>
                        <li><a href="https://www.youtube.com/watch?v=MLJuX1QCAuo">Getten books</a></li>
                        <li><a href="https://www.youtube.com/watch?v=7euDjFshjH4">User statistics</a></li>
                        <li><a href="https://www.youtube.com/watch?v=Tw8-l9KxSQc">User manager</a></li>
                        <li><a href="https://www.youtube.com/watch?v=ROIT5157lu4">Admin statistics</a></li>
                    </ul>
            </div>
        </div>

    );
}
export default page