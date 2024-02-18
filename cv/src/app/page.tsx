import AboutMyself from "../components/AboutMyself/AboutMyself";
import Certificates from "../components/Certificates/Certificates";
import Tabs from "../components/Experiences/Experiences";
import Hello from "../components/Hello/Hello";
import SignificantItems from "../components/SignificantItems/SignificantItems";
const Page = () => {
    return (
        <div>
            <Hello></Hello>
            <AboutMyself></AboutMyself>
            <Tabs></Tabs>
            <SignificantItems></SignificantItems>
            <Certificates></Certificates>
        </div>

    );
}
export default Page