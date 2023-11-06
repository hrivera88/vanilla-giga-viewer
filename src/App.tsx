import React from 'react';
import './App.css';
import Tools from './tools/Tools';
import ImageViewer from './image-viewer/ImageViewer';

const App: React.FC = () => {
	return (
		<>
			<div className="w-screen h-screen bg-black/50 flex flex-col items-center justify-center">
				<div className="giga-grid w-80vw h-80vh">
					<Tools />
					<ImageViewer />
				</div>
			</div>
		</>
	);
}

export default App;
