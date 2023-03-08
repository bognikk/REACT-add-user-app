import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandlerInAppFunction = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	return (
		<>
			<AddUser onAddUser={addUserHandlerInAppFunction} />
			{usersList.length && <UsersList usersProp={usersList} />}
		</>
	);
}

export default App;
