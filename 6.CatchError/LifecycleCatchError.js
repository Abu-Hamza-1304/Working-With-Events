/*
	Error Boundaries: These are basically React components that catch errors
	anywhere in their child component tree.
*/

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
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.number % 2 == 0) {
			return true;
		}

		return false;
	}

	render() {
		if (this.props.number > 15) {
			throw Error('The number is greater tan 15!')
		}
		return (
			<div className = "evennumber">
				{this.props.number}
			</div>
		);
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

	componentDidCatch(error, info) {
		/*
			In order to have any component to be an error boundary, we need to define the
			componentDidCatch method.
			The componentDidCatch can be thought of as a part of the lifecycle methods of
			a component.
			It's an error boundary that is invoked when any component in the component
			tree nested under the StreamingNumbers component throws an error. This is the
			error boundary.
			It accepts two input arguments: error and info
			error: it contains details of the actual error that was thrown.
			info: it is the error information which contains the actual stack trace of the
			error thrown, which is useful for debugging.
		*/
		this.setState({
			index: 0,
		})
	}

	render() {
		var nextNumber = this.props.numbers[this.state.index];

		return (
			<div className = "box">
				<EvenNumber number = {nextNumber} />
				<number number = {nextNumber} />
				<button className = "button" onClick = {this.next}>
					Get Next 
				</button>
			</div>
		);
	}
}

StreamingNumbers.defaultProps = {
	numbers: [3, 2, 5, 4, 11, 12, 9, 16, 13, 14, 12, 20, 19, 23, 26, 35, 29, 27, 1, 2, 45]
}

ReactDOM.render(<StreamingNumbers />, document.getElementById('outer'));