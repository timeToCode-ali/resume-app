import React from "react";

export const ProfessionalExperience = ({ data }) => {
	const { title, experiences } = data;

	return (
		<section>
			<h2 className='mb-6'>{title}</h2>
			<div className='flex flex-col gap-3'>
				{experiences?.map((item) => (
					<div className='flex flex-col rounded-lg '>
						<span className={`h-2 ${item.current ? "bg-green" : "bg-grey"}`} />
						<div className='p-6 shadow-md bg-grey-light'>
							<h3 className='mt-4'>{item.role}</h3>
							<p className='mt-2'>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
