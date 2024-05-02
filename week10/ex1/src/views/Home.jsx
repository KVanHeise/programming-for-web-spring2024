import llamaPic from "../assets/llamas.png";
import alpacaPic from "../assets/alpacas.png";

export function Home() {
    return (
        <div className="home-page">
        <h1>Which are better: llamas or alpacas?</h1>
            <p>
                Is this the last word in the debate?</p> 
            <p>    
                Have you made a choice?
            </p>
                
            <p>
                Use the navigation to learn more about each one and then you can decide which win:
            </p>
    
            <div className="photo-box">
                <img src={alpacaPic} alt="alpacaPhoto" />
                <strong>Alpacas</strong>

                OR

                <strong>Llamas</strong>
                <img src={llamaPic} alt="llamaPhoto" />
            </div>
        </div>
    )
}