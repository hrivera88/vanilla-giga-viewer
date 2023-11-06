import React from 'react';
import './ImageViewer.css';
import hike from './images/hike.jpg';

const ImageViewer: React.FC = () => {
	return (
		<>
			<div className="w-full h-full bg-white overflow-hidden inline-block m-0 relative image-viewer-grid">
				<img
					className="absolute block min-h-full min-w-full top-1/2 left-1/2 previewer-img"
					src={hike}
					alt="previewer"
				/>
			</div>
		</>
	);
}

export default ImageViewer;
