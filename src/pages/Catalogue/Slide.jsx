import {useEffect} from 'react'
import "./slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import webFont from "webfontloader";
import { Divider } from '@mui/material';
import { NavLink } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import course1 from "../../images/beginnerpic.jpg";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Slide = ({ title, products }) => {


    const customStyle2 = {
        color: 'rgb(255, 255, 255)',
        fontFamily: "'Bruno Ace', cursive"
    };

    const options = {
        size: "large",
        value: 3.5,
        readOnly: true,
        precision: 0.5,
    };

    useEffect(()=>{
        webFont.load({
          google:{
            families: ["'Quicksand', sans-serif"],
          },
        });    
    },[])
    let a = 4;


    return (
        <div className="products_section">
            <div className="products_deal">
                <h3  >{title}</h3>
                {/* <button className="view_btn">View All</button> */}
            </div>
            <Divider />

            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map((e) => {
                        return (
                            <NavLink to={`/coursedescription/${e._id}`} key={e._id}>
                                <div className="products_items">
                                    <div className="product_img">
                                        <img className='h-50 w-150' src={e.imageUrl ? e.imageUrl : a} alt="product" />
                                    </div>
                                    <p className="products_name">{e.description.length > 20 ? `${e.description.slice(0, 20)}...` : e.description}</p>
                                    <p className="products_offer" style={{ color: "#  007185" }}>{e.title}</p>

                                    <div className="detailsBlock-2">
                                        <Rating {...options} />
                                        <span>(500)</span>
                                    </div>
                                    <div className="detailsBlock-3">
                                        <h1>₹${e.price}</h1>
                                    </div>
                                    

                                </div>
                            </NavLink>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Slide

