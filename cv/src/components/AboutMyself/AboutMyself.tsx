import Link from "next/link"
import Image from 'next/image';

const Skils = [
     { what: "C# & ASP .Net Core (MVC, Entity framework)", percent: 100 },
    { what: "Angular (HTML & CSS & JavaScript)", percent: 100 },
    { what: "MSSQL/SQL", percent: 100 },
    { what: "Git & GitHub & Azure Devops", percent: 95 },
    { what: "C/C++", percent: 100 },
    { what: "Python", percent: 80 },
    { what: "Arduino & Lego Mindstorm", percent: 100 },
    { what: "MS Office package  & VBA", percent: 100 },
    { what: "Digital market", percent: 30 },
    { what: "CSM systems - Joomla/WordPress", percent: 60 }
]

const AboutMyself = () => {
    return (
        <div className="welcome_area p_120">
            <div className="container">
                <div className="row welcome_inner">
                    <div className="col-lg-6">
                        <div className="welcome_text">
                            <h4>About Myself</h4>
                            <p>
                            </p><h5>Starting</h5>
                            <div>
                                &emsp;When I was in in third grade, I entered to Telerik Kids Academy.
                                I was teached how to resolve basic algorithms problems by my teacher.
                                I realized that I like computer science. When I was in fourth grade,
                                I entered to algorithms contest - I finished eighth in the <a href="http://www.math.bas.bg/infos/files/2013-06-26-ranglista%202012-2013.htm">rankings</a>.
                            </div>
                            <h5>First project</h5>
                            <div>
                                &emsp;I continued my development with starting to make projects and go to competitions.
                                My first project was Grandma s Chest Tales.
                                This project includes 5 animated tales made through Power Point.
                                There are:
                                <ul>
                                    <li><a href="https://www.youtube.com/watch?v=XAYsqycvBeY">Grandpa pulls out a turnip</a></li>
                                    <li><a href="https://www.youtube.com/watch?v=Fkq_1_2nixk">The stone and the snake</a></li>
                                    <li><a href="https://www.youtube.com/watch?v=fB6qpyYWc_4">The bad word</a></li>
                                    <li><a href="https://www.youtube.com/watch?v=22oqc1pDAro">The fox and the stork</a></li>
                                    <li><a href="https://www.youtube.com/watch?v=DW_j7WlChJU">Slavery</a></li>
                                </ul>
                                I ranked second with this project.
                            </div>
                            <h5>Education with IT career course</h5>
                            <div>
                                &emsp;When I was in 10th grade, I enrolled in an IT career course with C #.
                                This training lasted 3 years and was divided into several modules.
                                Important modules are: Databases, Software Development,
                                Operating Systems, Algorithms, Internet Programming, Internship in a company.
                                After each module there was an exam, and I took each exam with an excellent 6.
                                I also passed two state exams - theory and practice with grades of 5.90 and 5.80.
                            </div>
                            <h5>MusicHub</h5>
                            <div>
                                &emsp;MusicHub is a website developed with ASP .Net Core, C # and Angular.
                                The application can store custom music. Music can be listened to by anyone.
                                The registered user can organize their favourite music in playlists.
                                Moreover, the user can leave a comment and vote for any music.
                                I ranked seventh with this project at <a href=" https://edusoft.fmi.uni-sofia.bg/archive/it2021/protocols/%D0%9D%D0%9E%D0%98%D0%A2_2021_%D0%A0%D0%B0%D0%B7%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8_web_11-12_%D1%81%D0%B0%D0%B9%D1%82.pdf">NOIT</a> contest.
                            </div>
                            <p></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tools_expert">
                            <div className="skill_main">
								{Skils.map((item, index) => (
                                    <div className="skill_item" key={index}>
									<div className="single_skill" >
                                        <h4>{item.what} <span className="counter">{item.percent}</span>%</h4>
                                        <div className="progress_br">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: `${item.percent}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMyself