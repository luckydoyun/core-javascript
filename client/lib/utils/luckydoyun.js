
const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  }
}

/* -------------------------------------------------------------------------- */
/*                               doyun function                               */
/* -------------------------------------------------------------------------- */
export const doyun = async (options = {}) => {

  // let defaultOptions = {...defaultOptions};
  // console.log(options);
  const { url, ...restOptions } = {
                                    ...defaultOptions,
                                    ...options,
                                    headers: {
                                      ...defaultOptions.headers,
                                      ...options.headers
                                    }
                                  };
  // console.log(url);
  // console.log(restOptions);


  let response = await fetch(url, restOptions);
  // console.log(response.ok);
  // console.log(response.headers);
  // console.log(await response.json());

  if (response.ok) {
    response.data = await response.json();
  }

  // console.log("doyun() 안에 있는 await으로 받은 response : ", response);
  return response;

}

/* -------------------------------------------------------------------------- */
/*                               doyun method 4                               */
/* -------------------------------------------------------------------------- */

doyun.get = (url, options) => {
  return doyun({ url,
                 ...options 
              });
}

doyun.delete = (url, options) => {
  return doyun({ url,
                 method:'DELETE',
                 ...options 
              });
}

doyun.post = (url, body, options) => {
  return doyun({ method:'POST',
                 url,
                 body:JSON.stringify(body),
                 ...options
              })
}

doyun.put = (url, body, options) => {
  return doyun({ method:'PUT',
                 url,
                 body:JSON.stringify(body),
                 ...options
              })
}