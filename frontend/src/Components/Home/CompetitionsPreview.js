import { useNavigate } from "react-router-dom";
import HomeNav from "./HomeNav";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

export default function CompetitionsPreview(){


    const navigate = useNavigate();
    const [data, setData] = useState([]);

        useEffect(() => {
        axios.get('http://localhost:8080/upcomming_competitions')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
        }, []);

            const handleClick = () => {
                navigate("/login");
            }

    return (
        <div>

            <Header />
            <HomeNav/>
     
            {data.map((comp, index) => (
                <Card sx={{ maxWidth: 345 }} key={index} class="container" id="card">
                    <CardActionArea>
                    
                        <CardMedia
                            component="img"
                            height="140"
                            image={`http://localhost:8080/images/` + comp.image}
                            alt="Competition Image"
                            onClick={handleClick }
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {comp.comp_title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Title: {comp.comp_title}<br />
                                Theme: {comp.comp_theme}<br />
                                Status: {comp.status}<br />
                                Date: {comp.date_0f_competition}<br />
                                Description: {comp.description}

                            </Typography>
                        </CardContent>
                    </CardActionArea >
                </Card>
            ))}

            <Footer/>
        </div>
    )
}