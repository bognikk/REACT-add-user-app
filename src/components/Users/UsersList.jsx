import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.scss";

const UsersList = ({ usersProp }) => {
	return (
		<Card className={classes.users}>
			<ul>
				{usersProp.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
