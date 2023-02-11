"use client";

import React, { useState } from "react";

const Skills = ({ skills }) => {
	const [activeTab, setActiveTab] = useState("soft");
	const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");
	const setTabsAlignment = (tab) =>
		tab === "soft" ? "text-left" : "text-right";

	const tabs = (
		<div className='flex'>
			{["soft", "hard"].map((el, i) => (
				<button
					key={el + "_" + i}
					className={`btn ${setBg(el)} ${setTabsAlignment(el)} `}
					onClick={() => setActiveTab(el)}
				>
					{el} Skills
				</button>
			))}
		</div>
	);

	const content = (
		<ul
			className={`flex flex-row flex-wrap content-start  list-none py-4 ${
				activeTab === "soft" ? "justify-start" : "justify-end"
			}`}
		>
			{skills[activeTab].map(({ icon, text }, index) => (
				<li className='skill' key={index}>
					<span className='mr-2'>{icon}</span>
					{text}
				</li>
			))}
		</ul>
	);
	return (
		<section>
			{tabs}
			{content}
		</section>
	);
};

export default Skills;
