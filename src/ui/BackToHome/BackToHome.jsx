import { Link } from "react-router-dom";
import "./BackToHome.css";

export default function BackToHome() {
    return (
        <Link to="/" className="back-home">
            ← Return to Aldoria
        </Link>
    );
}