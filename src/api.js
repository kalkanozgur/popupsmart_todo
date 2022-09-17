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
	return data;
};

export const createTodo = async (content) => {
	// const [data, setData] = useState();
	if (content.length >= 3) {
		console.log("createTodo", content);
		const { data } = await axios
			.post(url, {
				content: content,
			})
			.catch((e) => console.log(e))
			.finally(() => {
				console.log("todoCreated");
			});
		console.log("created data: ", data);
		return data;
	} else console.log("content min 3 harften oluşmalı");
};
