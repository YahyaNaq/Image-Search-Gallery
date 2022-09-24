import { useRef, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js';
import ImgList from './ImgList.js';
// import fetchData from './Apifunc.js';

function App() {
  const inputRef = useRef();
  const [err,setErr] = useState(false);
  const [render1, setRender1] = useState(true);
  const [imgs,setImgs] = useState([]);

  const fetchData = async function(){
    setRender1(false);
    try {
      const data= await axios.get(`https://api.unsplash.com/search/photos?query=${inputRef.current.value}&client_id=${process.env.REACT_APP_API_KEY}`)
      const imgsInfo = data.data.results.map(result => {
        return {
          id: result.id,
          desc: result.alt_description,
          urls: result.urls,
          user: result.user.username
        }
      })
      setImgs(imgs => imgsInfo);
      setErr(false);
    }
    catch(error){
      setErr(true)
    };
  };
  const handleBtnClick = () => {
    if (inputRef.current.value) fetchData();
  }
  const handleKeyPress = (e) => {
    if (e.charCode !== 13) return 
    if (inputRef.current.value) fetchData();
    } 



  return (
    <div className="flex flex-col items-center text-center">
      <div>
        <h1
        className="lg:text-2xl md:text-xl sm:text-lg
        font-semibold mt-4 mb-3"
        >Image Search Gallery</h1>
        <SearchBar
        inputRef= { inputRef }
        handleBtnClick= { handleBtnClick }
        handleKeyPress= { handleKeyPress }
        />
      </div>
      <div className="overflow-y-scroll h-[100vh] w-full">
        <ImgList
        imgs={ imgs }
        err={err}
        render1={ render1 }
        />
      </div>
    </div>
  );
}

export default App;
