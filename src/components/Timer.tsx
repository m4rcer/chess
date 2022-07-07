import React, { useEffect, useRef, useState } from 'react';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

export interface ITimerProps {
    currentPlayer: Player | null;
    restart: () => void;
};

const Timer: React.FunctionComponent<ITimerProps> = ({
    currentPlayer,
    restart
}) => {
    const [whiteTime, setWhiteTime] = useState(300);
    const [blackTime, setBlackTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer]);

    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current);
        }
        const callback = currentPlayer?.color === Colors.WHITE 
        ? decrementWhiteTimer 
        : decrementBlackTimer;
        timer.current = setInterval(callback, 1000);
    }

    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1);
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1);
    }

    const handleRestart = () => {
        setWhiteTime(300);
        setBlackTime(300);
        restart();
    }

    return <div>
        <div>
            <button onClick={() => handleRestart()}>Restart game</button>
        </div>
        <h2>Белые - {whiteTime}</h2>
        <h2>Черные - {blackTime}</h2>
    </div>
}
export default Timer;