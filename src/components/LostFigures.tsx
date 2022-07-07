import { title } from 'process';
import React from 'react';
import { Figure } from '../models/figures/Figure';

export interface ILostFiguresProps {
    title: string;
    figures: Figure[];
};

const LostFigures: React.FunctionComponent<ILostFiguresProps> = ({
    title,
    figures
}) => {
    return <div className='lost'>
        <h3>{title}</h3>
        {figures.map(figure =>
            <div key={figure.id}>
                {figure.name} {figure.logo && <img height={20} width={20} src={figure.logo}/>}
            </div>
        )}
    </div>
}
export default LostFigures;