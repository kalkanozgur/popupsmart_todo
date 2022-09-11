import { useEffect, useState } from "react";
import axios from "axios";
const url = "https://631e00e7cc652771a48fa6af.mockapi.io/todos";

export const getTodos = () => {
	const [data, setData] = useState();
	useEffect(() => {
		console.log("calling api");
		axios(url)
			.then((res) => {
				const resData = res.data;
				setData(resData);
			})
			.catch((e) => console.log(e))
			.finally(() => console.log("api fetched"));
	}, [url]);
	console.log(data);
	return data;
};

export const CreateTodo = (content) => {
	console.log("createTodo", content);
	axios
		.post(url, {
			content: content,
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch((e) => console.log(e))
		.finally(() => {
			console.log("todoCreated");
		});

	// return res.data;
};
