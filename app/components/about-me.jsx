import React, { useId } from "react";
import Skills from "./skills";

const AboutMe = ({ about, skills }) => {
	const { title, body } = about;
	const id = useId();

	return (
		<section>
			<h2 className='mb-8'>{title}</h2>
			{body?.map((text, i) => (
				<p className='mb-6' key={`${id}-${i}`}>
					{text}
				</p>
			))}

			<Skills skills={skills} />
		</section>
	);
};

export default AboutMe;
