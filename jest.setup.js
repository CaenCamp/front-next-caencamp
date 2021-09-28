import '@testing-library/jest-dom/extend-expect';

// eslint-disable-next-line no-console
const originalError = console.error;

// eslint-disable-next-line no-console
console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
    }
    originalError.call(console, ...args);
};

// // eslint-disable-next-line no-console
// const originalError = console.error;
// // eslint-disable-next-line no-undef
// beforeAll(() => {
//     // eslint-disable-next-line no-console
//     console.error = (...args) => {
//         if (/Warning.*not wrapped in act/.test(args[0])) {
//             return;
//         }
//         originalError.call(console, ...args);
//     };
// });

// // eslint-disable-next-line no-undef
// afterAll(() => {
//     // eslint-disable-next-line no-console
//     console.error = originalError;
// });
