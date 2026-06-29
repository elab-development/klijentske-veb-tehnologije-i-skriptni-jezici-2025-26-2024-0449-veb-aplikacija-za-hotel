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
            <section className="features">
                <h2>Zašto izabrati Aurora Palace?</h2>
                
                <div className="features-grid">
                    <div className="feature-card">
                         <h3>🛏 Luksuzne sobe</h3>
                         <p>Sve sobe su moderno uređene i pružaju maksimalnu udobnost.</p>
                         </div>
                         
                         <div className="feature-card">
                            <h3>🍽 Restoran</h3>
                            <p>   Uživajte u domaćoj i internacionalnoj kuhinji.</p>
                            </div>
                            
                            <div className="feature-card">
                                 <h3>🏊 Wellness & Spa</h3>
                                 <p>Bazen, sauna i spa centar dostupni su svim gostima.</p>
                    </div>
                </div>
            </section>
        </>

    );

}

export default Home;