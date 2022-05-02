import './skills.scss';
import { useEffect, useState } from 'react';
import {
  webDev,
  programming,
  graphics, 
  database
} from "../../data";
import PortfolioList from '../portfolioList/PortfolioList';

function Skills() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('web');

  const list = [
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "programming",
      title: "Programming",
    },
    {
      id: "database",
      title: "Database",
    },
    {
      id: "graphics",
      title: "Graphics",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webDev);
        break;
      case "programming":
        setData(programming);
        break;
      case "database":
        setData(database);
        break;
      case "graphics":
        setData(graphics);
        break;
      default:
        setData(webDev);
    }
  }, [selected]);

  return (
    <div id='skills' className='skills'>
      <h1 className='title'>
        My Skills
      </h1>
      <ul>
        {list.map(item=>(
          <PortfolioList 
            title={item.title} 
            active={ selected === item.id } 
            setSelected={setSelected} 
            id = {item.id}
          />
        ))}
      </ul>
      <div className="container">
      {data.map((d) => (
        <div className='card'>
          <div className='top'>
            <img src={d.img} alt='' />
          </div>
          <div className='bottom'>
            {d.title}
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Skills;