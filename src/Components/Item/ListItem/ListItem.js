import './listitem.css';
import Card from '@mui/material/Card';

export default function ListItem({name}) {
  return (
    <div>
      <Card id="listItem">
        {name}
      </Card>
    </div>
  )
}
