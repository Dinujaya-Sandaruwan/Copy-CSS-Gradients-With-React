import { useState } from "react";

const ColorBlock = ({ firstColor, secoundColor }) => {
	const [colors, setColors] = useState(`${firstColor} - ${secoundColor}`);
	return (
		<div
			className="warp"
			onClick={() => {
				navigator.clipboard
					.writeText(
						`background: linear-gradient(${firstColor}, ${secoundColor});`
					)
					.then(setColors("Copied To Clipboard"))
					.then(
						setTimeout(function () {
							setColors(`${firstColor} - ${secoundColor}`);
						}, 2000)
					)
					.catch((error) =>
						console.error("Error copying to clipboard: ", error)
					);
			}}
		>
			<div
				className="color"
				style={{
					backgroundImage: `linear-gradient(${firstColor}, ${secoundColor} )`,
				}}
			></div>
			<p>{colors}</p>
		</div>
	);
};

export default ColorBlock;
