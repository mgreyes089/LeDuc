
import React from 'react';

const Maps = () => {
    return (
        <div >
            <iframe 
                className = 'maps' 
                width="100%" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.4853566822394!2d0.6195178507240147!3d41.62363928917726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6e040b98ca30d%3A0xebaf2d3397992a94!2sCarrer%20Folch%20i%20Torres%2C%203%2C%2025008%20Lleida!5e0!3m2!1ses-419!2ses!4v1675764980981!5m2!1ses-419!2ses"  
                height="450" 
                style={{border: "none"}} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title='mapa' 

            />

        </div>
    );
}

export default Maps;
