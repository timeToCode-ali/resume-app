import React from "react";
import AboutMe from "./component/about-me";
import { aboutMe, skills, professionalData } from "../data/page-data";
import ProfessionaExperience from "./component/professiona-experience";

const page = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			<ProfessionaExperience data={professionalData} />
		</div>
	);
};

export default page;
