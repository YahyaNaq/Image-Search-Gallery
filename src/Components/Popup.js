import saveAs from 'file-saver';
import {useState } from 'react';

function Popup({ popup, closePopup, imgToDownload, imgRegular }) {

	const [imgSize, setImgSize] = useState('');

	const downloadImg = () => {
		const fileName=`${imgToDownload.user}-${imgToDownload.id}-yahyaN`;
		if (imgSize==="") return saveAs(imgToDownload.urls.regular, fileName);
		return saveAs(imgSize, fileName);
	}

	const selectImgSize = (img) => {
		setImgSize(img);
	}


	return (popup) ? (
		<div
		className="hidden sm:hidden md:block lg:inline-block overflow-y-auto overflow-x-hidden
		fixed top-0 right-0 left-0 z-50 w-full
		md:inset-0 h-modal md:h-full lg:flex justify-center
		items-start bg-black/40">
		    <div
		    className="relative p-4 w-full h-full
		    lg:min-w-lg lg:max-w-2xl md:h-auto">
		        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
		            <button
		            type="button"
		            onClick={closePopup}
		            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200
		            hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center
		            dark:hover:bg-gray-800 dark:hover:text-white">
		                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
		                <span className="sr-only">Close modal</span>
		            </button>
		            <div className="py-4 px-6 rounded-t border-b dark:border-gray-600">
		                <h3 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white">
		                    Download Image
		                </h3>
		            </div>
		            <div className="p-6">
		            		<div className="flex justify-center">
		            			<img src={ imgToDownload.urls.small } alt=""/>
		                </div>
		                <p
		                className="text-md mt-8 font-normal text-gray-900 dark:text-gray-400"
		                >Select the size you want to download the image in.</p>
		                <div className="flex flex-wrap justify-center items-center mt-6 mb-4 gap-3">
                      <button
                      className="mx-1 p-3 text-base font-bold text-gray-900
                      bg-gray-100 rounded-lg hover:bg-gray-200 group
                      focus:bg-gray-900 focus:text-gray-100
                      dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      onClick={ () => selectImgSize(imgToDownload.urls.full) }
                      > Full
                      </button>
                      <button
                      className="mx-1 p-3 text-base font-bold text-gray-900
                      bg-gray-100 rounded-lg hover:bg-gray-200 group
                      focus:bg-gray-900 focus:text-gray-100
                      dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      onClick={ () => selectImgSize(imgToDownload.urls.regular) }
                      > Regular
                      </button>
                      <button
                      className="mx-1 p-3 text-base font-bold text-gray-900
                      bg-gray-100 rounded-lg hover:bg-gray-200 group
                      focus:bg-gray-900 focus:text-gray-100
                      dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      onClick={ () => selectImgSize(imgToDownload.urls.small) }
                      > Small
                      </button>
                      <button
                      className="mx-1 p-3 text-base font-bold text-gray-900
                      bg-gray-100 rounded-lg hover:bg-gray-200 group
                      focus:bg-gray-900 focus:text-gray-100
                      dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      onClick={ () => selectImgSize(imgToDownload.urls.thumb) }
                      > Thumb
                      </button>
											<button
											className="bg-blue-700 hover:bg-blue-800 text-gray-200
											font-semibold py-[.7rem] px-4 inline-flex items-center rounded-lg"
											onClick={ downloadImg }
											>
											  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
											  <span>Download</span>
											</button>
		                </div>
		                <div>
		                    <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
		                        <svg className="mr-2 w-3 h-3" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
		                        Can't download the image?</a>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		) : "";
}

export default Popup;