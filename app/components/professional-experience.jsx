import React from "react";

export const ProfessionalExperience = ({ data }) => {
	const { title, experiences } = data;
	const card = (item) => (
		<div className='bg-white p-6 rounded-lg shadow-md'>
			<div className='bg-green-500 h-1 rounded-t-lg'></div>
			<h3 className='font-medium text-lg mt-4'>{item.role}</h3>
			<p className='text-grey-700 mt-2'>{item.description}</p>
		</div>
	);
	console.log(experiences.map((i) => i.role));
	return (
		<section>
			<h2 className='mb-6'>{title}</h2>
			<div className='flex flex-col gap-3'>
				{experiences?.map((item) => (
					<div className='flex flex-col rounded-lg '>
						<span className={`h-2 ${item.current ? "bg-green" : "bg-grey"}`} />
						<div className='p-6 shadow-md bg-gray-light'>
							<h3 className='font-medium text-lg mt-4'>{item.role}</h3>
							<p className='text-grey-700 mt-2'>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
