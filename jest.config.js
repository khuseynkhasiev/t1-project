// /** @type {import('jest').Config} */
// const config = {
//     collectCoverage: true,
//     collectCoverageFrom: ["src/**/*.{js,jsx}"],
//     coverageDirectory: "coverage",
//     testEnvironment: "jsdom",
//     setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
//     transform: {
//         "^.+\\.(js|jsx)$": "babel-jest",
//     },
//     moduleFileExtensions: ["js", "jsx"],
//     moduleNameMapper: {
//         "^.+\\.svg$": "jest-svg-transformer",
//         "^.+\\.(css|less|scss)$": "identity-obj-proxy",
//     },
// };

// export default config;

/** @type {import('jest').Config} */
const config = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
};

export default config;
