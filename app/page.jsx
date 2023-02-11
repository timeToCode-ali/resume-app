import React from "react";
import AboutMe from "./components/about-me";
import { ProfessionalExperience } from "./components/professional-experience";

import { aboutMe, skills, professionalData } from "./data/page-data";

const HomePage = () => {
	return (
		<>
			<AboutMe about={aboutMe} skills={skills} />
			<ProfessionalExperience data={professionalData} />
		</>
	);
};

export default HomePage;
