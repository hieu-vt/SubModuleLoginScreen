/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Create FormData
 */
const createWithPhoto = (photo: Array<any>, body: any) => {
  const data = new FormData();

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });
  return data;
};
export { createWithPhoto };
