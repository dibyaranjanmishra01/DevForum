import './horizontallist.css';
import CardItem from '../Item/CardItem/CardItem';


export default function HorizontalList()
{
    const data = [{id:1,name:"rc0"},{id:2,name:"rc1"},{id:3,name:"rc2"},{id:4,name:"rc3"},{id:5,name:"rc4"},{id:6,name:"rc5"},{id:7,name:"rc6"}];
    return (
        <div>
            <div id="recentCommunity">
                {data.map((item)=>(
                    <CardItem key={item.id} name={item.name}/>
                ))}
            </div>
        </div>
    );
}


