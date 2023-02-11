import React from "react";
//import { LinkIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from "next/image";

import { Linkedin, Envelope, Twitter, Medium } from "./icons/";

const Sidebar = ({ data }) => {
	const { name, role, education, contactLinks } = data;
	//factory function that creates the components based on the string passed to it.

	return (
		<div className='h-screen bg-black w-full  flex flex-col content-between sm:justify-around sm:w-1/3  sm:fixed '>
			<div className='flex flex-col items-center p-10 text-white'>
				<Image
					priority
					width={300}
					height={300}
					className='rounded-full mb-6 h-full'
					src='/images/julian-wan-WNoLnJo7tS8-unsplash.jpg'
					alt='julian-wan-WNoLnJo7tS8-unsplash'
				/>

				<h1 className='mb-2'>{name}</h1>
				<h2 className='mb-8'>{role}</h2>
				<p className='mb-2'>{education?.[0]}</p>
				<p className='mb-2'>{education?.[1]}</p>
				<div>
					<h4 className='mb-4 mt-4 sm:mt-8 text-white text-center'>
						CONTACT ME
					</h4>
					<div className='flex justify-center  gap-1'>
						<a href={contactLinks?.[0]}>
							<Envelope className='icons_contactme' />
						</a>
						<a href={contactLinks?.[1]}>
							<Twitter className='icons_contactme' />
						</a>
						<a href={contactLinks?.[2]}>
							<Linkedin className='icons_contactme' />
						</a>
						<a href={contactLinks?.[3]}>
							<Medium className='icons_contactme' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
