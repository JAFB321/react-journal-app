import React from "react";

export const JournalEntry = ({ props }) => {
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: "cover",
					backgroundImage:
						"url(https://images.freeimages.com/images/small-previews/7bc/bald-eagle-1-1400106.jpg)",
				}}
			></div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">Un nuevo dia</p>
				<p className="journal__entry-content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>

			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
