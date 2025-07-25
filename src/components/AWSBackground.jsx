import { useEffect, useState } from 'react';
import './AWSBackground.css';

const AWSBackground = () => {
    const [orbs, setOrbs] = useState([]);

    useEffect(() => {
        // Create floating orbs
        const createOrbs = () => {
            const newOrbs = [];
            for (let i = 0; i < 15; i++) {
                newOrbs.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 100 + 50,
                    duration: Math.random() * 20 + 10,
                    delay: Math.random() * 5
                });
            }
            setOrbs(newOrbs);
        };

        createOrbs();
    }, []);

    return (
        <div className="aws-background">
            {/* Animated Grid */}
            <div className="grid-overlay">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="grid-line" style={{ 
                        left: `${i * 5}%`,
                        animationDelay: `${i * 0.1}s`
                    }} />
                ))}
                {[...Array(20)].map((_, i) => (
                    <div key={`h-${i}`} className="grid-line horizontal" style={{ 
                        top: `${i * 5}%`,
                        animationDelay: `${i * 0.1}s`
                    }} />
                ))}
            </div>

            {/* Floating Orbs */}
            {orbs.map(orb => (
                <div
                    key={orb.id}
                    className="floating-orb"
                    style={{
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        animationDuration: `${orb.duration}s`,
                        animationDelay: `${orb.delay}s`
                    }}
                />
            ))}

            {/* AWS Logo Pattern */}
            <div className="aws-pattern">
                <div className="pattern-element pattern-1"></div>
                <div className="pattern-element pattern-2"></div>
                <div className="pattern-element pattern-3"></div>
            </div>
        </div>
    );
};

export default AWSBackground;
