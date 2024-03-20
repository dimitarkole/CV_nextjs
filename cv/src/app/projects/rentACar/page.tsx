import ImageSlider from "../../../components/Slider/Slider";

const images = [1].map((n) => `/img/Projects/rentACar/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Rent a car</h3>
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
                            Main purpose: <span id="purpose"></span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson"></span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">ASP .Net Core, C#, EntityFramework, Razer</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">6 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2021</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/RentACar">Here</a></span>
                        </p>
                        <p>
                            Awards: <span id="awards">Excellent 5.80 (state exam from IT career course)</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h4>Project desctiption</h4>
                <p id="desctiption">
                    Rent a Car is a system that serves as a link between
                    consumer and rent-a-car office. Through the system a user can view
                    free, cars for certain dates and say he wants to rent a car.
                    There are three types of users in the system: Administrators and
                    clients (Client). The system works with users and access to it is denied,
                    if the client is not registered with his account. The following is kept for each user
                    information:
                </p>

                <ul>
                    <li>username</li>
                    <li>password</li>
                    <li>proper name</li>
                    <li>father's name</li>
                    <li>last name</li>
                    <li>PIN</li>
                    <li>telephone number</li>
                    <li>e-mail</li>
                </ul>
                <p id="desctiption">
                    As a customer, a user can view the offered cars.
                    As a customer, a user can filter available cars in a range of dates (start and end dates).
                    As a customer, a user can rent a car only if it is available within a range of start and end dates.
                    As a customer, a user can submit a rental application for a selected car, the application contains:
                </p>
                <ul>
                    <li>start date</li>
                    <li>end date</li>
                    <li>the selected car</li>
                    <li>the user who creates the request</li>
                    <li>final price for the selected period</li>
                    <li>status - "pending", "canceled", "active", "used" and "overdue", as the status "pending" is active before the date of collection, status "canceled" is active, if the request is canceled, "active" indicates that the car is in the consumer, and "used" indicates that the car is returned.</li>
                </ul>
                <p id="desctiption">
                    If the return date has passed, but the user has not returned the car, the application acquires the status "overdue".
                    The customer can review the order and the final price before sending it, for which his confirmation is required.
                    As a customer, a user can see all the requests he has made.
                    As a customer, a user can cancel a request before its start date, but not after the start date has passed. Requests that have been canceled become "canceled".
                    As an administrator, a user can add, view, modify and delete cars. For each car is kept:
                </p>
                <ul>
                    <li>car brand</li>
                    <li>car model</li>
                    <li>year of the car</li>
                    <li>number of passenger seats</li>
                    <li>short description (containing technical information)</li>
                    <li>price for renting a car per day</li>
                    <li>photo</li>
                </ul>
                <p id="desctiption">
                    As an administrator, a user has full access to all rental requests (create, view, edit, delete).
                    As an administrator, a user can change the status of a rental request.
                    As an administrator, a user can filter rental requests by their status.
                    As an administrator, a user has control over the creation and management of other users.
                    When starting the system, the visitor has the opportunity to log in to their user profile or create one.
                    The role of the created profile is that of an ordinary user.
                    Logging in is done by providing a name and password. If there is no registration, a user can register.
                    Appropriate validations must be available for all forms. Make it possible to filter requests by their status. Create an opportunity to filter cars by brand, model, year (from - to), number of passengers and price (from - to). Two users with the same PIN, username or e-mail are not allowed.
                    A car cannot be rented if during the given period it will already be rented by another user. Rent-a-car management system For the successful installation of DI, in practice, a three-layer application must be developed.
                    General requirements
                    The project must be an application implemented through a data layer, a service layer and a presentation layer.
                    The application must have a Web-based interface that uses HTML and CSS.
                    The application must work with a relational database.
                    The project must follow the official recommendations (style guide) of the technologies used and have meaningful comments.
                </p>
        </div>
        </div>

    );
}
export default page