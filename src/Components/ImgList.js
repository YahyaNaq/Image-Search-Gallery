import { useState } from 'react';
import Popup from './Popup.js';
import Welcome from '../Assets/welcome.svg';
import Notfound from '../Assets/not-found.svg';
import ErrImg from '../Assets/error-img.svg';

function ImgList({imgs, err, render1}) {

	const [popup,setPopup] = useState(false);
	const [imgToDownload,setImgToDownload] = useState({});
	const [imgRegular,setImgRegular] = useState('');
	
	const openPopup = (imgInfo="") => {
		setImgToDownload(imgToDownload => imgInfo);
		setPopup(!popup);
	}

	return (!err && imgs.length!==0) ? (
		<div>
			<div
			className="container mx-auto grid mb-4
	      sm:grid-cols-1 md:grid-cols-2
	      lg:grid-cols-3 xl:grid-cols-3
	      pt-6 gap-5 columns-1 max-w-6xl sm:min-w-[15rem]
	      place-items-center align-items-start"
	      >
				{
					imgs.map(imag => {
						return <img
							key={imag.id}
							src={imag.urls.small} 
							alt={imag.desc}
							className="self-align md:self-stretch cursor-pointer hover:brightness-[.8] hover:scale-[1.005]"
							onClick={ () => openPopup({id:imag.id, urls:imag.urls, user:imag.user}) }
							/>
		      })
				}
			</div>
			<Popup
			popup={popup}
			closePopup={openPopup}
			imgToDownload={imgToDownload}
			/>
		</div>
		)
		: (imgs.length===0 && render1) ?
			<div className="flex flex-col items-center">
				<img src={ Welcome } className="sm:h-[7.5rem] md:h-48 mt-20 mb-4"/>
				<h1 className="font-medium sm:text-md md:text-lg">Welcome, try searching "food"!</h1>
			</div>	
		: (imgs.length===0) ?
			<div className="flex flex-col items-center">
				<img src={ Notfound } className="sm:w-40 md:w-60 mt-16 mb-4"/>
				<h1 className="font-medium sm:text-md md:text-lg">No images found!</h1>
			</div>
		:   <div className="flex flex-col items-center">
				<img src={ ErrImg } className="sm:w-40 md:w-60 mt-16 mb-4"/>
				<h1 className="font-medium sm:text-md md:text-lg">Sorry, an error occured!</h1>
			</div>
}

export default ImgList;