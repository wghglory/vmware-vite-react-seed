// export const imageModules = import.meta.glob('../static/images/*');

// for (const path in modules) {
//   imageModules[path]().then((mod) => {
//     console.log(path, mod);
//   });
// }

// ../static/images/no-services_dark.svg -->
// Module {
// default: "/src/static/images/no-services_dark.svg"
// ...
// }

// // code produced by vite
// const imageModules = {
//   '../static/images/no-services_dark.svg': () => import('/src/static/images/no-services_dark.svg'),
//   // ...
// };

export const imageModules = import.meta.globEager('/src/static/images/*');
