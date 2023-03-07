import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.scss";

const ErrorModal = ({ titleProp, messageProp }) => {
	return (
		<>
			<div className={classes.backdrop}></div>
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{titleProp}</h2>
				</header>
				<div className={classes.content}>
					<p>{messageProp}</p>
				</div>
				<footer className={classes.actions}>
					<Button>Okay</Button>
				</footer>
			</Card>
		</>
	);
};

export default ErrorModal;
