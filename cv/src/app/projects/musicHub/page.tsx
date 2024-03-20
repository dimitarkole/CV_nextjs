import ImageSlider from "../../../components/Slider/Slider";

const images = [1].map((n) => `/img/Projects/musichub/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">MusicHub</h3>
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
                            Main purpose: <span id="purpose">Make people fun with music</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">People who love musics</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">ASP .Net Core, C#, EntityFramework, Angular, SendGrid</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">480 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2020 - to present</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/MusicHub">Here</a> (Beta Version)</span>
                        </p>
                        <p>
                            Awards:
                            <span id="awards">
                                NTIT - National Autumn Tournament in Information Technology "John Atanasoff" - 7th place in "Web Applications"<br/>
                                    7th place in the National Olympiad in Information Technology
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    Many people have fun listening to music. So, I decided to help them by making a website where users could upload their songs as well as listen to other users' songs and rate them. The system is easy to use, with an intuitive interface and easy-to-understand features. The result for the end customer is more frequent pleasant moments by listening to good music, which can be organized into various playlists and categories.
                </p>

                <h4>Project architecture</h4>
                <ul>
                    <li>Data access layer - works with the database using Entity Franework Core 5.0, this layer is independent from the others. It consists of two other layers: </li>
                    <li>Domain Layer - contains all entities, enums. Classes which represent tables in the database</li>
                    <li>Persistence Layer - contains database context, all configurations, migrations and data seeding logic. It is responsible for data persistance. Here is implmented Repository desing pattern which help us to accomplish more abstraction between data access logic and business logic. As a result we can our database provider without making so many changes to the code. For example we can chnage MS SQL with MongoDB without changing some business logic.</li>
                    <li>Business Layer - main logic of the appliaction. It depends only on Data access layer but it uses repositories to access data so the coupling is very loose. It can be reuced in multiple appliactions. For example if we want to create some mobile version of the system, can reuse logic in this layer and we should also implement the new user intreface.</li>
                    <li>Application Layer - consists of those elements that are specific to this application. It do the binding between the application and your business layer. It depends on business layer. It uses specific technologies and conceptions like: ASP.NET  CORE, Middlewares and others. In our situation it's main functionality is to receive the request and send response to the clients.</li>
                    <li>Presentation Layer - contains all presentation logic. It used Angular view engine to generate html and also use technologies like: TypeScript & HTML.</li>
                    <li>
                        Common Layer - contains all the logic which is shared in the application. Contains global constants, custom exceptions and extension methods.
                    </li>
                    <li>
                        Tests - the system is tested with a lot of automated tests - unit tests and integration tests. We use libraries like Moq, xUnit and Microsoft.EntityFrameworkCore.InMemory to the all the logic in business layer.
                    </li>
                    <li>
                        Code quality - project follows SOLID principles and all other principles of high quality code. Also there are .editorconfig file in which are defained all code styles and conventions in order the code of the project to be consistent.
                    </li>
                </ul>

                <h4>Functionality</h4>
                <h5>Guest</h5>
                <ul>
                    <li>Login, Register</li>
                    <li>View home page with all music and playlists in this platform</li>
                    <li>Play any music and palylist</li>
                </ul>
                <h5>Logged in Users</h5>
                <ul>
                    <li>Create a music</li>
                    <li>View all their musics</li>
                    <li>Edit and remove a music</li>
                    <li>Like/Dislike music</li>
                    <li>View all liked musics</li>
                    <li>View all played musics</li>
                    <li>Create a comment to a music</li>
                    <li>Edit a comment to a music</li>
                    <li>Delete a comment</li>
                    <li>Create a playlist</li>
                    <li>View all their playlist</li>
                    <li>Edit and remove playlist</li>
                    <li>Add or remove music to playlist</li>
                </ul>
                <h5>Administrators</h5>
                <ul>
                    <li>Remove users from system</li>
                    <li>View information about platform</li>
                </ul>
            </div>
        </div>
    );
}
export default page