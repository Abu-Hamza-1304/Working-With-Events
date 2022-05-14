class AnchorLink extends React.Component {
	state = {
		link_counter: 0
	};

	handleClick = (e) => {

		e.preventDefault();
		/*
			e.preventDefault(); is a function on the synthetic event that invokes the corresponding
			function on the browser's native event.
			This will prevent the default behaviour that browsers have when we click on the anchor link.
			Only our custom function will be eexcuted.
		*/

		console.log(e.type + ' ' + this.state.link_counter);

		console.log("native event: " + e.nativeEvent)

		this.setState(function(prevState, props) {
			return {
				link_counter: prevState.link_counter + 1
			}
		});
	};

	render() {
		return (
			<div>
				<div className = "box">
					<a href = "http://www.skillsoft.com" target = "_blank" onClick = {this.handleClick}>
						Click Me
					</a>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<AnchorLink />, document.getElementById('outer'));