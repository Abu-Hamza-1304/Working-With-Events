class Number extends React.Component {
	render() {
		return (
			<div className = "number">
				{this.props.number}
			</div>
		);
	}
}

class EvenNumber extends React.Component {

	constructor(props) {
		super(props);

		console.log('1. constructor')
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("2. shouldComponentUpdate: ", nextProps, nextState)
		if (nextProps.number % 2 == 0) {
			console.log('shouldComponentUpdate returns true')
			return true;
		}
		console.log('shouldComponentUpdate return false')
		return false;
	}

	render() {
		console.log("3. render")

		return (
			<div className = "evennumber">
				{this.props.number}
			</div>
		);
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("4. getSnapshotBeforeUpdate", prevProps, prevProps)

		return prevProps.number
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("5. componentDidUpdate");

		console.log('The previous number was: ', snapshot)
	}
}

class StreamingNumbers extends React.Component {
	state = {
		index: 0
	}

	next = () => {
		this.setState(function(prevState) {
			return {
				index: prevState.index + 1
			}
		});
	}

	render() {
		var nextNumber = this.props.numbers[this.state.index];
		return (
			<div className = "box">
				<EvenNumber number = {nextNumber} />
				<Number number = {nextNumber} />
				<button className = "button" onClick = {this.next}>
					Get next
				</button>
			</div>
		);
	}
}

StreamingNumbers.defaultProps = {
	numbers: [3, 2, 5, 4, 11, 12, 9, 16, 13, 14, 12, 20, 19, 23, 26, 35, 29, 27, 1, 2, 45]
}

ReactDOM.render(<StreamingNumbers />, document.getElementById('outer'));