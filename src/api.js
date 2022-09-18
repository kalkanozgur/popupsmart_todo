import axios from "axios";

const url = "https://631e00e7cc652771a48fa6af.mockapi.io/todos";

export const fetchTodos = async () => {
	const { data } = await axios(url).catch((e) => console.log(e));
	return data;
};

export const apiReq = async (method, endpoint, data) => {
	let resData;
	await axios({
		method: method,
		url: `${url}/${endpoint}`,
		data: data,
	})
		.then((res) => {
			resData = res.data;
			console.log(resData);
		})
		.catch((e) => console.log(e));
	return resData;
};
