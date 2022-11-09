import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Students from "../../assets/student.svg";
import Image from "next/image";
import Box from "@mui/system/Box";
import { useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./clip.module.css";
import { Button, Typography, Grid, Container } from "@mui/material";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { useRouter } from "next/router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}

const data = [
    {
        id: 1,
        title: "Rohan’s dream of being a Chemical Engineer is now reality.",
        image: Students,
    },
    {
        id: 2,
        title: "Rohan’s dream of being a Chemical Engineer is now reality.",
        image: Students,
    },
    {
        id: 3,
        title: "Rohan’s dream of being a Chemical Engineer is now reality.",
        image: Students,
    },
    {
        id: 4,
        title: "Rohan’s dream of being a Chemical Engineer is now reality.",
        image: Students,
    },
    {
        id: 5,
        title: "Rohan’s dream of being a Chemical Engineer is now reality.",
        image: Students,
    },
];

const Spoke = (props) => {
    const router = useRouter();
    const handleMove = () => {
        router.push("/success")
    }
    const sliderRef = useRef(null);
    console.log(sliderRef.current);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",


        speed: 500,
        autoPlay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [

            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 1.7,

                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,

                    initialSlide: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,

                },
            },
        ],
    };

    return (
        <Box sx={{ backgroundColor: "#0D0D0C", color: "white" }}>
            <Box>
                <Typography sx={{ fontSize: "40px", textAlign: "center", py: "30px", fontWeight: 700, fontFamily: 'sentient', lineHeight: '72px', fontStyle: 'normal' }}>
                    {props.title}
                    Skopick picks
                </Typography>
            </Box>
            <div className={styles.slider}>
                <div>
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((item, index) => (
                            <Card key={index} sx={{ maxWidth: '658px', backgroundColor: '#0D0D0C', color: 'white', px: 1, filter: `${index % 2 === 1 ? '0.1' : '2'}` }}>
                                <Image src={Students} style={{ width: '100%' }} alt='bn' />
                                <CardContent color='white'>
                                    <Grid container>
                                        <Grid item xs={12} sm={3}  >
                                            <Box sx={{ mt: { sm: 4.8, xs: 0 }, display: 'flex', flexDirection: 'column', alignSelf: 'start', justifyContent: 'start' }}>
                                                <Typography sx={{ textAlignLast: 'left' }}><b>$100,000</b></Typography>
                                                <Typography sx={{ textAlignLast: 'left', color: '#BDBDBD;', textAlign: 'start', }}>Funded of $100k</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} alignSelf='flex-start' sx={{ mt: { xs: 2, sm: 0 } }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600, textAlign: { xs: 'justify', sm: 'start' }, textAlignLast: 'start' }}>{item.title}</Typography>
                                            <Box display='flex'>
                                                <Box display='flex'> <PeopleOutlineOutlinedIcon sx={{ color: '#BDBDBD;' }} />
                                                    <Typography sx={{ color: '#BDBDBD;', fontWeight: 400, mt: .5, marginLeft: '8px', fontSize: '14px' }}> 1452 donors</Typography></Box>
                                                <Box display='flex' sx={{ ml: 2 }}><HistoryOutlinedIcon sx={{ color: '#BDBDBD;' }} />
                                                    <Typography sx={{ color: '#BDBDBD;', marginLeft: '8px', mt: .5, fontSize: '14px' }}>in 56 days</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid xs={12} sm={3} sx={{ mt: { xs: 2, sm: 0 } }}>     <Button size="small" className={styles.btn} sx={{ width: { xs: '130px', md: '140px' }, height: { xs: '40px', md: '50px' } }} >Read More </Button></Grid>
                                    </Grid>
                                </CardContent>

                            </Card>
                        ))}
                    </Slider>
                </div>

                <Box
                    className={styles.icons}
                    sx={{
                        display: "flex",
                        position: "absolute",
                        bottom: { xs: "35.5%", sm: "15%", md: "6%" },
                        left: { xs: "9%", sm: "10%", md: "21%", lg: "23%" },
                    }}
                >
                    <div
                        onClick={() => sliderRef.current.slickPrev()}
                        style={{ marginRight: "10px" }}
                        className={styles.circle}
                    >
                        <ArrowBackIosNewIcon className={styles.arrow} color="white" />
                    </div>
                    <div
                        onClick={() => sliderRef.current.slickNext()}
                        className={styles.circle}
                    >
                        <ArrowForwardIosIcon className={styles.arrow} color="white" />
                    </div>
                </Box>
            </div>
        </Box>
    );
};

export default Spoke;
