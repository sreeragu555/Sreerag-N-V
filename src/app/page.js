import Link from "next/link";
import React from "react";
import './CSS/mystyle.css';
import Image from 'next/image'
import brandpic from './Assets/Images/Brand.png';
export default function Home() {
	return (
		// <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">

		// 	<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
		// 	<div className="grid grid-cols-6 gap-4">
		// 		<div className="col-start-2 col-span-1"><Image src={brandpic} width={200} height={200} /></div>
		// 		<div style={{ lineHeight: 1.3 }} className="z-11 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
		// 			I'm Sreerag
		// 		</div>
		// 	</div>
		// 	<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
		// 	<div className="my-16 text-center animate-fade-in">
		// 		<h2 className="text-sm text-zinc-500 ">
		// 			I'm building Web Apps and Mobile Apps.</h2>
		// 	</div></div>
		<div>
			<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="grid grid-cols-6 gap-4" style={{alignItems: 'center'}}>
					<div className="col-start-2 col-span-1 animate-title"><Image src={brandpic} width={200} alt="Image of Sreerag" /></div>
					<div style={{ lineHeight: 2 }} className="col-span-4 z-11 text-3xl text-transparent duration-5000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
						I'm Sreerag</div>
				</div>
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="my-16 text-center animate-fade-in">
					<h2 className="text-2xl text-zinc-500 ">
						I'm building Web Apps and Mobile Apps.</h2>
				</div>
			</div>

		</div>
	);
}
