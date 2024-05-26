import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import STMBoardImage from '../../../assets/STMBoard.png'

const Item = ({imageSrc, title, subtitle, description, techUsed}) => {
    return (
        <Card
        style={{
            width: '18rem'
        }}
        >
            <img
                alt="Sample"
                src={imageSrc}
                style={{
                    borderRadius: "20px"
                }}
            />
            <CardBody>
                <CardTitle tag="h5">
                {title ? title : "Basic title"}
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                    {subtitle}
                </CardSubtitle>
                <CardText>
                    {description}
                </CardText>
                <CardText>
                    {techUsed}
                </CardText>
                <Button color="primary">
                    Learn More
                </Button>
                {' '}
                <Button color="primary">
                    Watch Demo
                </Button>
            </CardBody>
        </Card>
    )
}

const projects = [
    {
        image: STMBoardImage,
        title: "Embedded Mini-Player",
        
    },
    {

    }
]

const HorizontalScroller = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll( {target: ref} )

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={ref} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="flex gap-4">
                    {projects.map(proj => {
                        <Item imageSrc={proj.image}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default HorizontalScroller;