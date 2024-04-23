import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./standDetails.css";

function StandDetails() {
    const { id } = useParams();
    const [stand, setStand] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [Numero, setNumero] = useState('');
    const [prix, setPrix] = useState('');
    const [superficie, setSuperficie] = useState('');
    const [disponibilite, setDisponibilite] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/stand/getid/${id}`);
                const fetchedStand = response.data;
                setStand(fetchedStand);
                setNumero(fetchedStand.Numero);
                setPrix(fetchedStand.prix);
                setSuperficie(fetchedStand.superficie);
                setDisponibilite(fetchedStand.disponibilite);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching stand details:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/stand/update/${id}`, {
                Numero,
                prix,
                superficie,
                disponibilite
            });
            console.log("Stand updated successfully");
            navigate('/stands');
        } catch (error) {
            console.error("Error updating stand:", error);
        }
    };

    return (
        <div className="stand-details-container">
            <h2>Détails de stand</h2>
            {error ? (
                <div className="error-message">Erreur : {error}</div>
            ) : stand ? (
                <form>
                    <div className="stand-details">
                        <div className="stand-info">
                            <label>Numero:</label>
                            <input
                                type="text"
                                value={Numero}
                                onChange={(e) => setNumero(e.target.value)}
                            />
                        </div>
                        <div className="stand-info">
                            <label>Prix:</label>
                            <input
                                type="text"
                                value={prix}
                                onChange={(e) => setPrix(e.target.value)}
                            />
                        </div>
                        <div className="stand-info">
                            <label>Superficie:</label>
                            <input
                                type="text"
                                value={superficie}
                                onChange={(e) => setSuperficie(e.target.value)}
                            />
                        </div>
                        <div className="stand-info">
                            <label>Disponibilité:</label>
                            <input
                                type="checkbox"
                                checked={disponibilite}
                                onChange={(e) => setDisponibilite(e.target.checked)}
                            />
                        </div>
                        <button type="button" onClick={handleUpdate}>Mettre à Jour</button>
                    </div>
                </form>
            ) : (
                <div className="loading-message">Chargement...</div>
            )}
        </div>
    );
}

export default StandDetails;
