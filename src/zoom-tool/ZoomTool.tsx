import React from "react";

const ZoomTool: React.FC = () => {
	return (
		<>
			<button
				className="rounded bg-white text-slate-600 hover:bg-slate-200 p-2 focus:bg-slate-200 mb-1"
				type="button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
					/>
				</svg>
			</button>
		</>
	);
}

export default ZoomTool;