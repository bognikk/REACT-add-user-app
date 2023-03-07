import React from "react";

import classes from "./Button.module.scss";

const Button = ({ typeProp, onClickProp, children }) => {
	return (
		<button
			className={classes.button}
			type={typeProp || "button"}
			onClick={onClickProp}
		>
			{children}
		</button>
	);
};

export default Button;
