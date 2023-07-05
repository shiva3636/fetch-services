const BaseURL = process.env.REACT_APP_BASEURL;
const Token = "My Token";

// POST Method
const postService = async (url, body) => {
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "POST",
    headers: {
      Authorization: Token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  try {
    const result1 = await response.json();
    return result1;
  } catch (error) {
    console.error(error);
  }
};

// PUT Method
const putService = async (url, body) => {
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "PUT",
    headers: {
      Authorization: Token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  try {
    const result1 = await response.json();
    return result1;
  } catch (e) {
    console.error(e);
  }
};

// GET Method
const getService = async (path) => {
  const response = await fetch(`${BaseURL}/${path}`, {
    method: "GET",
    headers: {
      Authorization: Token,
      "Content-Type": "application/json",
    },
  });
  try {
    const result2 = await response.json();
    return result2;
  } catch (error) {
    console.error(error);
  }
};

//pass the FormData object using axios
const postFormData = async (url, formData) => {
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "POST",
    headers: {
      Authorization: Token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formData,
  });
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

// Pass the FormData object using axios
const axiosPostData = async (url, formData) => {
  return axios
    .post(`${BaseURL}/${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: Token,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.response.status === 401) {
      } else if (err.response.status !== 200) {
      }
    });
};

export { postServices, getServices, putServices, postFormData, axiosPostData};
