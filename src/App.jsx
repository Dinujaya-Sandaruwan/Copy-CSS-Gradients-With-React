import ColorBlock from "./components/colorBlock";
import Colors from "./colors";

function App() {
	return (
		<div className="App">
			{Colors.map((colors) => {
				return (
					<ColorBlock
						key={colors.id}
						firstColor={colors.firstColor}
						secoundColor={colors.secoundColor}
					/>
				);
			})}
		</div>
	);
}

export default App;
