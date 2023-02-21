import Carousel from "react-material-ui-carousel"
import BannerItem from "./BannerItem";
import Box from "@mui/material/Box";
import "./Banner.css";



function Banner2() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: "/img/r-1.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: "/img/r-2.jpg"
        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            img: "/img/r-3.jpg"
        },
        {
            name: "Random Name #4",
            description: "Hello World!",
            img: "/img/r-4.jpg"
        }
    ]

    return (
        <Box>
            <Carousel
                animation="slide"
                changeOnFirstRender={false}
                cycleNavigation={true}
                fullHeightHover={true}
                autoPlay={false}
                duration={500}
                navButtonsAlwaysVisible
                indicatorContainerProps={{
                    style: {
                        position: "absolute",
                        bottom: "10px",
                        zIndex: "5"
                    }
                }}
                sx={{aspectRatio: '2.6'}}
            >
                {
                    items.map( (item, i) => <BannerItem key={i} item={item} /> )
                }
            </Carousel>
        </Box>
    )
}

export default Banner2;
