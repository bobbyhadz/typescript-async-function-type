export {};

// EXAMPLE 1 - Type an async Function in TypeScript

// ✅ Arrow function with Type
type GetNumber = (num: number) => Promise<number>;

const getNumber: GetNumber = async (num) => {
  const result = await Promise.resolve(num);

  return result;
};

// // --------------------------------------------

// // ✅ Arrow function with Interface
// interface IGetNumber {
//   (num: number): Promise<number>;
// }

// const getNumber2: IGetNumber = async (num) => {
//   const result = await Promise.resolve(num);

//   return result;
// };

// ---------------------------------------------------

// // EXAMPLE 2 - Use `Promise<void>` for async functions that don't return a value

// async function logNumber(num: number): Promise<void> {
//   await Promise.resolve();

//   console.log(num);
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Use `Promise<never>` for async functions that throw an error

// async function logNumber(num: number): Promise<never> {
//   await Promise.resolve();

//   throw new Error('Something went wrong');
// }
