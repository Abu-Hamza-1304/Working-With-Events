/*
	SYNTHETIC EVENT: It's a cross-browser wrapper around the browser's native event
	which has the same interface as the native event, but it abstracts away browser-dependent
	differences.
	React abstracts these details away from us by handling events in exactly the same manner
	across all browsers using this synthetic event wrapper.
	Using this synthetic events brings consistency and high performance to React applications
	and interfaces. Consistencies achieved by normalizing events so they have the same properties
	across different browsers and platforms.
	The synthetic event system achieves high performance by automatically using event delegation.
	In reality, under the hood, React does not attach event handlers to the individual elements
	within our HTML, to the nodes themselves. Instead, a single event listener is attached to the
	root of teh document. And, when an event is fired, React maps it to the correct component and
	calls the correct event handler using these synthetic events.  
*/

class Counter extends React.Component {
	state = {
		counter: 0
	};

	incrementCount = (e) => {
		e.preventDefault();

		var increment = 1;
		if (e.shiftKey) {
			increment = 10;
		}
		if (e.altKey) {
			increment = 100;
		}

		this.setState(function(prevState, props) {
			return {
				counter: prevState.counter + increment
			}
		});
	};

	decrementCount = (e) => {
		e.preventDefault();

		var decrement = 1;
		if (e.shiftKey) {
			increment = 10;
		}
		if (e.altKey) {
			increment = 100;
		}

		this.setState(function(prevState, props) {
			return {
				counter: prevState.counter - decrement
			}
		});
	};

	render() {
		return (
			<div>
				<div className = "box">
					{this.state.counter}
				</div>
				<button className = "button" onClick = {this.incrementCount}>
					+
				</button>
				<button className = "button" onClick = {this.decrementCount}>
					-
				</button>
				<div>
					*Change increment and decrement values using Shift and Alt keys
				</div>
			</div>
		);
	}	
}

ReactDOM.render(<Counter />, document.getElementById('outer'));