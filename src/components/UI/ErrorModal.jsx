import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.scss";

const ErrorModal = ({ titleProp, messageProp, onConfirm }) => {
	return (
		<>
			<div className={classes.backdrop} onClick={onConfirm}></div>
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{titleProp}</h2>
				</header>
				<div className={classes.content}>
					<p>{messageProp}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClickProp={onConfirm}>Okay</Button>
				</footer>
			</Card>
		</>
	);
};

export default ErrorModal;
