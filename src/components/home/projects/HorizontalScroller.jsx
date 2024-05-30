import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import STMBoardImage from '../../../assets/STMBoard.png'
import { motion } from "framer-motion";
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
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    
    return (
        <section ref={targetRef} className="relative h-screen bg-neutral-900 overflow-hidden">
          <div className="sticky top-0 flex items-center">
            <motion.div style={{ x }} className="flex gap-4">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </motion.div>
          </div>
        </section>
      );
};

export default HorizontalScroller;