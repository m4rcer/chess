import React from 'react';
import { Cell } from '../models/Cell';

export interface ICellComponentProps {
    cell: Cell,
    selected: boolean,
    click: (cell:Cell) => void,
};

const CellComponent: React.FunctionComponent<ICellComponentProps> = ({
    cell,
    selected,
    click
}) => {
    return <div 
        className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
        onClick={() => click(cell)}
        style={{background: cell.available && cell.figure ? 'green' : ''}}>
            {cell.available && !cell.figure && <div className={"available"}></div>}
            {cell.figure?.logo && <img src={cell.figure.logo}/>}
    </div>
}
export default CellComponent;