// Displays full details for a selected kid using id

import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import KidDetail from "./KidDetail";

function KidDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [kid, setKid] = useState(null);
    const [requested, setRequested] = useState(false);
    const [message, setMessage] = useState("");

    // Get the selected kid from the backend
    useEffect(() => {
        fetch(`http://localhost:8080/api/parents/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error();
                }

                return response.json();
            })
            .then((data) => {
                setKid(data);
            })
            .catch(() => {
                setMessage("Unable to load kid details.");
            });
    }, [id]);

    return (
        <main className="app">
            <Button
                text="⬅ Back"
                className="back-btn"
                onClick={() => navigate(-1)}
            />

            {message && <p className="message">{message}</p>}

            {kid && (
                <KidDetail
                    kid={kid}
                    requested={requested}
                    setRequested={setRequested}
                />
            )}
        </main>
    );
}

export default KidDetailPage;