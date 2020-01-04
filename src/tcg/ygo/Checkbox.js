define(["react", "react-class"], function(React, ReactClass){
	return function(props)
	{
		return React.createElement(
			"span",
			{
				className: "ipsCustomInput"
			},
			React.createElement("input", {
				id: props.id,
				onChange: props.onChange,
				type: "checkbox",
				checked: props.checked
			}),
			React.createElement("span", {})
		);
	}
});