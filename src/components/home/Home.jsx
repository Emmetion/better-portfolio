import Contact from "./contact/Contact";
import Introduction from "./introduction/Introduction"
import Projects from "./projects/Projects"
import Technologies from "./technologies/Technologies";

const Home = () => {
    return (
        <>
            <Introduction/>
            <Technologies/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Home;