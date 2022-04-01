import './projects.scss';
import { useEffect, useState } from 'react';
import {
  webProj,
  graphicsProj
} from "../../data";
import ProjectList from '../projectList/ProjectList';

function Projects() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('web');

  const list = [
    {
      id: "web",
      title: "Web Application",
    },
    {
      id: "graphics",
      title: "Graphics",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webProj);
        break;
      case "graphics":
        setData(graphicsProj);
        break;
      default:
        setData(webProj);
    }
  }, [selected]);

  return (
    <div id='projects' className='projects'>
      <h1 className='title'>
        My Projects
      </h1>
      <ul>
        {list.map(item=>(
          <ProjectList 
            title={item.title} 
            active={ selected === item.id } 
            setSelected={setSelected} 
            id = {item.id}
          />
        ))}
      </ul>
      <div className="container">
      {data.map((d) => (
        <a href={d.link} alt=''>
            <div className='card'>
                <div className='top'>
                <img src={d.img} alt='' ></img>
            </div>
            <div className='bottom'>
                {d.title}
            </div>
            </div>
        </a>
      ))}
      </div>
    </div>
  )
}

export default Projects;