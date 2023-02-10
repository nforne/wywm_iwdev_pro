const getProducts = async (url) => {
  return await (await fetch(url)).json();
}

