import React from "react";
import { NoteScreen } from "../notes/NoteScreen";
import { JournalUnselected } from "./JournalUnselected";
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
	return (
		<div className="journal__main-content">
			<Sidebar />

			<main>
				{/* <JournalUnselected /> */}
				<NoteScreen />
			</main>
		</div>
	);
};
