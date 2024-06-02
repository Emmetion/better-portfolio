import Introduction from "./introduction/Introduction"
import Projects from "./projects/Projects"
import Technologies from "./technologies/Technologies";

const Home = () => {
    return (
        <>
            <Introduction/>
            <Technologies/>
            <Projects/>
        </>
    )
}

export default Home;