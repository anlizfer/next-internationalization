import {getDictionary} from './dictionaries'

const Home=async ({params})=>{
  const Traductor= await getDictionary(params.lang);
  console.log(params);
  return(<>
     <h1>{Traductor.home.title}</h1>
     <p>{Traductor.home.secondary}</p>
     <button>{Traductor.home.button_send}</button>
  </>)
}

export default Home;