import React from 'react';
import ZoomTool from '../zoom-tool/ZoomTool';
import HandTool from '../hand-tool/HandTool';
import NoteVisibilityTool from '../note-visibility-tool/NoteVisibilityTool';

// Styles
import './Tools.css';

const Tools: React.FC = () => {
	return (
		<>
			<div className="flex tools-area w-10 flex-col">
				<ZoomTool />
				<HandTool />
				<NoteVisibilityTool />
			</div>
		</>
	);
}

export default Tools;
