module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapping: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.(ts|tsx)',
        '<rootDir>/src/**/*.(test|spec).(ts|tsx)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverageFrom: [
        'src/**/*.(ts|tsx)',
        '!src/**/*.d.ts',
    ],
    globals: {
        'ts-jest': {
            tsconfig: {
                esModuleInterop: true,
            },
        },
    },
    testEnvironmentOptions: {
        url: 'http://localhost',
    },
};