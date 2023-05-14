import { Link } from 'react-router-dom';
import './carditem.css';
import Card from '@mui/material/Card';

export default function CardItem({name,link})
{
    if(link == 'none')
    {
        return (
            <div>
                <Card id="cardItem">
                    <span>{name}</span>
                </Card>
            </div>
        );
    }
    return(
        <div>
            <Card id="cardItem">
                <span><Link to = {link}>{name}</Link></span>
            </Card>
        </div>
    )
}

CardItem.defaultProps = {
    link: 'none',
  };