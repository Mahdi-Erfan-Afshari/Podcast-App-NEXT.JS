'use client'
import Link from "next/link"
import { useState } from "react"

const Info = ({ title , summary , transcript , refrences }) => {
  const [displaySummery, setDisplaySummary] = useState(true)
  const [displayTranscript, setDisplayTranscript] = useState(false)
  const [displayRefrences, setDisplayRefrences] = useState(false)

  const changeInfoLable = (e) => {
	let infoBtn = document.querySelectorAll('#info-btn')
	  for (let index = 0; index < infoBtn.length; index++) {
		infoBtn[index].classList.remove('info-active');
	  }
	  e.target.classList.add('info-active');
	}
	
  return (
	<div className="">
	  <div className="md:my-6 md:w-auto my-3 py-2 px-3 shadow-lg rounded-md flex flex-col justify-center items-center bg-white w-full">
		<div className="px-2 flex justify-center md:overflow-auto overflow-x-scroll w-full">
		  <Link href='#'><button id="info-btn" className="font-semibold md:py-4 md:px-5 py-2 px-8 mx-1 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(true) 
			setDisplayTranscript(false)
			setDisplayRefrences(false)
			}}>Summary</button>
		  </Link>
		  <Link href='#'><button id="info-btn" className="font-semibold md:py-4 md:px-5 py-2 px-8 mx-1 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(false) 
			setDisplayTranscript(true)
			setDisplayRefrences(false)
			}}>Transcript</button>
		  </Link>
		  <Link href='#'><button id="info-btn" className="font-semibold md:py-4 md:px-5 py-2 px-8 mx-1 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(false) 
			setDisplayTranscript(false)
			setDisplayRefrences(true)
			}}>Refrences</button>
		  </Link>
		</div>
		<hr className="w-full" />
		<div className="w-full h-auto rounded-md p-3 mt-8 mb-4"  style={{display: displaySummery ? "block" : 'none'}} >
		  <h1 className="text-center font-bold text-2xl mb-2">{ title }</h1>
		  <span className="text-gray-800 text-justify">
			<p className="text-center">
			  {summary}
			</p>
		  </span>
		</div>

		<div className="w-full h-auto rounded-md p-3 mt-8 mb-4"  style={{display: displayTranscript ? "block" : 'none'}} >
		  <h1 className="text-center font-bold text-2xl mb-2">{ title }</h1>
		  <span className="text-gray-800 text-justify">
			<p className="text-center">
			  {transcript}
			</p>
		  </span>
		</div>

		<div className="w-full h-auto rounded-md p-3 mt-8 mb-4"  style={{display: displayRefrences ? "block" : 'none'}} >
		  <h1 className="text-center font-bold text-2xl mb-2">{ title }</h1>
		  <span className="text-gray-800 text-justify">
			<p className="text-center">
			  {refrences}
			</p>
		  </span>
		</div>
	  </div>
	</div>
  )
}

export default Info
