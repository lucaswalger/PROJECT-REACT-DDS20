import {Link} from 'react-router-dom'

const Sobre = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <Link to={"/infocard/1"}>InfoCard 1</Link>
      <Link to={"/infocard/2"}>InfoCard 2</Link>
      <Link to={"/infocard/3"}>InfoCard 3</Link>
    </div>
  )
}

export default Sobre