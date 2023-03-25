"use client";
import React, { useState } from "react";

export type SkillsProps = {
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

type TabTypeProps = "soft" | "hard";
// Define the type for the tabs
// includes the possible values for the tabs ("soft" and "hard"). Then, I used this type as a generic parameter for the useState function to specify the type of the activeTab state variable.

const Skills = ({ data }: SkillsProps) => {
	const [activeTab, setActiveTab] = useState<TabTypeProps>("soft");

	const setBg = (active: TabTypeProps) =>
		activeTab === active ? "bg-yellow" : "bg-grey";
	const setTabsAlignment = (tab: TabTypeProps) =>
		tab === "soft" ? "text-left" : "text-right";

	const tabsType: TabTypeProps[] = ["soft", "hard"];

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
