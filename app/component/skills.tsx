"use client";
import React, { useState } from "react";

type SkillsProps1 = {
	data: {
		soft: {
			icon: string;
			text: string;
		}[];
		hard: {
			icon: string;
			text: string;
		}[];
	};
};

type Skills = {
	icon: string;
	text: string;
};

type SkillsProps2 = {
	data: {
		soft: Skills[];
		hard: Skills[];
	};
};

type SkillCategory = "soft" | "hard";
// Define the type for the tabs as well
// includes the possible values for the skills ("soft" and "hard")

export type SkillsProps = {
	data: {
		[K in SkillCategory]: {
			icon: string;
			text: string;
		}[];
	};
};

const Skills = ({ data }: SkillsProps) => {
	const [activeTab, setActiveTab] = useState<SkillCategory>("soft");

	const setBg = (active: SkillCategory) =>
		activeTab === active ? "bg-yellow" : "bg-grey";
	const setTabsAlignment = (tab: SkillCategory) =>
		tab === "soft" ? "text-left" : "text-right";

	const tabsType: SkillCategory[] = ["soft", "hard"];

	const tabs = (
		<div className='flex'>
			{tabsType.map((el) => (
				<button
					key={el}
					type='button'
					className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
					onClick={() => setActiveTab(el)}
				>
					{el} Skills
				</button>
			))}
		</div>
	);
	const content = (
		<ul
			className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
				activeTab === "soft" ? "justify-start" : "justify-end"
			}`}
		>
			{data[activeTab].map(({ icon, text }) => (
				<li key={text} className='skill'>
					<span> {icon}</span> {text}
				</li>
			))}
		</ul>
	);
	return (
		<div>
			{tabs}
			{content}
		</div>
	);
};

export default Skills;
