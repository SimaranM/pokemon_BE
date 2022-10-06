import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className='home-page'>
            <div className='home-content'>
                <div className='home-img'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/4/46/Pokemon_Go.png' alt='image' />
                </div>
                <div className='select-btn'>
                    <Link to='/pokelist'>Let's get started...</Link>
                    <Link to='/fighting'>Just let me fight!...</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
