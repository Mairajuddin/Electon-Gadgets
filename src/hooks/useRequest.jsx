export const baseUrl = "http://localhost:3000";

export const FireApi = async (endpoint, method, data = null) => {
  // console.log(endpoint, method, data);
  const headers = {
    "Content-Type": "application/json",
  };
  const options = {
    method: method,
    headers,
    body: data ? JSON.stringify(data) : null,
  };
  const response = await fetch(`${baseUrl}/${endpoint}`, options);
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    return { code: response.status, message: response.statusText };
  }
};
