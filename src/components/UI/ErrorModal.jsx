import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.scss";

const Backdrop = ({ onConfirm }) => {
	return <div className={classes.backdrop} onClick={onConfirm}></div>;
};

const ModalOverlay = ({ titleProp, messageProp, onConfirm }) => {
	return (
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
	);
};

const ErrorModal = ({ titleProp, messageProp, onConfirm }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={onConfirm} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					onConfirm={onConfirm}
					titleProp={titleProp}
					messageProp={messageProp}
				/>,
				document.getElementById("overlay-root")
			)}
		</>
	);
};

export default ErrorModal;
