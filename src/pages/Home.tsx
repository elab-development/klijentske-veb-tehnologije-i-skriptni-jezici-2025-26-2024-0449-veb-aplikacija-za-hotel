import hero from "../assets/backgroud.webp";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (

        <>

            <section
                className="hero"
                style={{backgroundImage:`url(${hero})`}}
            >

                <div className="hero-content">

                    <h1>
                        Aurora Palace
                    </h1>

                    <p>
                        Luksuz, elegancija i nezaboravan boravak na jednom mestu.
                    </p>

                    <button
                        onClick={() => navigate("/rooms")}
                    >
                        Pogledaj sobe
                    </button>

                </div>

            </section>

        </>

    );

}

export default Home;