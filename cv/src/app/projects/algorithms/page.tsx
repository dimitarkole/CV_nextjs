import ImageSlider from "../../../components/Slider/Slider";

const images = [1].map((n) => `/img/Projects/algorithms/${n}.jpg`);
const page = () => {
    return (
        <div className="media row">
            <div className="col-md-12 personal_text">
                <h3 id="projectName">Algorithms with C#</h3>
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
                            Main purpose: <span id="purpose">To learn how does code wokr better.</span>
                        </p>
                        <p>
                            Target person: <span id="targetPerson">N/A</span>
                        </p>
                        <p>
                            Tech stack: <span id="techStack">C#</span>
                        </p>
                        <p>
                            Working hours: <span id="workingHours">40 hours</span>
                        </p>
                        <p>
                            Year: <span id="year">2020</span>
                        </p>
                        <p>
                            Source code: <span id="sourceCode"><a href="https://dev.azure.com/dimkolev2002/Algorithms">Here</a></span>
                        </p>
                        <p>
                            Awards: <span id="awards">N/A</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h4>Project desctiption</h4>
                <p>Code in this repo is from exercises and demos in course "Algorithms" at SoftUni.</p>
                <h4 id="user-content-lectures">Lectures</h4>
                <ol>
                    <li>
                        <p>RECURSION, SORTING AND SEARCHING ALGORITHMS</p>
                        <ul>
                            <li>Recursion: direct, indirect, infinite, exit criteria</li>
                            <li>Backtracking: the 8 queens problem</li>
                            <li>All paths in labyrinth</li>
                            <li>Sorting, stable and unstable sorting, comparison-based sorting</li>
                            <li>Selection sort, bubble sort, insertion sort, quicksort, merge sort</li>
                            <li>Counting-based sorting: counting sort, bucket sort</li>
                            <li>Search algorithms: linear search, binary search</li>
                            <li>Shuffle algorithms</li>
                        </ul>
                    </li>
                    <li>
                        <p>RECURSION, SORTING AND SEARCHING ALGORITHMS - EXERCISE</p>
                        <ul>
                            <li>Solving practical problems with recursion</li>
                            <li>Solving practical problems with sorting and searching algorithms</li>
                        </ul>
                    </li>
                    <li>
                        <p>COMBINATORIAL ALGORITHMS</p>
                        <ul>
                            <li>Generating combinations (with and without repetitions)</li>
                            <li>Generating variations (with and without repetitions)</li>
                            <li>Generating permutations (with and without repetitions)</li>
                        </ul>
                    </li>
                    <li>
                        <p>GREEDY ALGORITHMS</p>
                        <ul>
                            <li>Greedy algorithms: picking locally best solution</li>
                            <li>Greedy algorithms and failure cases</li>
                            <li>Optimal substructure and greedy choice</li>
                        </ul>
                    </li>
                    <li>
                        <p>DYNAMIC PROGRAMMING</p>
                        <ul>
                            <li>Divide-and-conquer</li>
                            <li>Dynamic programming concepts, memoization</li>
                            <li>Classical dynamic programming problems and solutions: Longest increasing subsequence,
                                Longest common subsequence (LCS)</li>
                            <li>Subset sum problem</li>
                            <li>Knapsack problem</li>
                            <li>String searching algorithms</li>
                        </ul>
                    </li>
                    <li>
                        <p>GRAPHS AND GRAPH ALGORITHMS</p>
                        <ul>
                            <li>Graphs: definition, terminology, representations</li>
                            <li>Basic graph algorithms: traversals, finding connected components</li>
                            <li>Shortest paths: Dijkstra's algorithm, Floyd-Warshall algorithm</li>
                            <li>Topological sorting algorithms</li>
                        </ul>
                    </li>
                    <li>
                        <p>GRAPHS AND GRAPH ALGORITHMS - EXERCISE</p>
                        <ul>
                            <li>Solving practical problems with graph algorithms</li>
                        </ul>
                    </li>
                    <li>
                        <p>PROBLEM SOLVING METHODOLOGY</p>
                        <ul>
                            <li>Proven techniques for problem solving</li>
                            <li>Read and Analyze the Problems</li>
                            <li>Use a sheet of paper and a pen for sketching</li>
                            <li>Think up, invent and try ideas</li>
                            <li>Break the problem into sub-problems</li>
                            <li>Check up your ideas</li>
                            <li>Choose appropriate data structures</li>
                            <li>Think about the efficiency</li>
                            <li>Implement your algorithm step-by-step</li>
                            <li>Thoroughly test your solution</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    );
}
export default page