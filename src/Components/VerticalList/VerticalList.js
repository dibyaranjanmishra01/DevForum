import ListItem from '../Item/ListItem/ListItem';
import './verticallist.css';

export default function VerticalList()
{
    let data =[];
    for( let i = 0;i < 20;i++ )
    {
        data.push({id:i,name:`rc${i}`});
    }
    return (
        <div id="recentThread">
            {data.map((item)=>(
                <ListItem key={item.id} name={item.name}/>
            ))}
        </div>
    );
}