import './carditem.css';
import Card from '@mui/material/Card';

export default function CardItem({name})
{
    return (
        <div>
            <Card id="cardItem">
                <span>{name}</span>
            </Card>
        </div>
    );
}