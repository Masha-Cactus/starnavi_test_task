// function get id from url
export const getId = (url: string) => {
  const match = url.match(/\d+/);
  let id = "";

  if (match) {
    id = match[0].toString();
  }

  return id;
};
