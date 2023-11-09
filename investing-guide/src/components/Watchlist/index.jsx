import { useParams } from "react-router-dom";
import Container from "../Container";
import { useState } from "react";
import axios from "axios";
import Header from "../Header";
const Watchlist = (props) => {
    const [watchlist, setWatchlist]= useState([]);
    axios.get("http://127.0.0.1:8000/api/watchlist/").then((res) => setWatchlist(res.data));
    console.log(watchlist);
    
    return (
        <div>
        
        <Container coins = {watchlist}></Container>
        </div>

    )
}
export default Watchlist