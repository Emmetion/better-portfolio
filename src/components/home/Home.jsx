import Introduction from "./introduction/Introduction"
import HorizontalScroller from "./projects/HorizontalScroller";
import Projects from "./projects/Projects"
import Technologies from "./technologies/Technologies";

const Home = () => {
    return (
        <>
            <Introduction/>
            <Technologies/>
            <HorizontalScroller></HorizontalScroller>
            <Projects/>
        </>
    )
}

export default Home;