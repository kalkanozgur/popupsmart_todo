import {useState} from "react";
import axios from "axios";

function api() {
    const [data, setData] = useState();
	const uri = "https://631b54b2dc236c0b1ef4242b.mockapi.io";
    axios(uri).then((data) => setData(data))

	return <div>api</div>;
}

export default api;
