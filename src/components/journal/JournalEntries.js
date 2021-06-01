import React from "react";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
	const entries = [1, 2, 3, 4, 6, 7];

	return (
		<div className="journal__entries">
			{entries.map((val) => (
				<JournalEntry key={val} />
			))}
		</div>
	);
};
