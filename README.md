# TypeScript Test Coverage Project - Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests with Coverage

```bash
npm run test:coverage
```

This will:

- Run all Jest tests
- Generate code coverage report
- Create LCOV report at `coverage/lcov.info`

### 3. Build Project

```bash
npm run build
```

### 4. Run SonarQube Analysis

```bash
# If SonarQube Scanner is installed globally
sonar-scanner \
  -Dsonar.projectBaseDir=$(pwd) \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=<YOUR_SONARQUBE_TOKEN>

# Or using Docker
docker run --rm \
  -e SONAR_HOST_URL=http://localhost:9000 \
  -e SONAR_LOGIN=<YOUR_SONARQUBE_TOKEN> \
  -v $(pwd):/usr/src \
  sonarsource/sonar-scanner-cli
```

## Project Structure

```
test-coverage-project/
├── src/
│   ├── index.ts          # Entry point
│   ├── utilities.ts      # Calculator, StringUtils, UserService classes
│   └── helpers.ts        # ArrayUtils, DateUtils, Validator classes
├── tests/
│   ├── utilities.calculator.test.ts
│   ├── utilities.string.test.ts
│   ├── utilities.user.test.ts
│   ├── helpers.array.test.ts
│   ├── helpers.date.test.ts
│   └── helpers.validator.test.ts
├── coverage/             # Generated coverage reports
├── dist/                 # Compiled JavaScript
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── jest.config.js        # Jest configuration
└── sonar-project.properties  # SonarQube configuration
```

## Available NPM Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run all tests
- `npm run test:coverage` - Run tests with coverage reporting
- `npm run clean` - Remove build artifacts and coverage

## Test Coverage

The project includes comprehensive tests covering:

### Utilities (utilities.ts)

- **Calculator**: Arithmetic operations (add, subtract, multiply, divide, square, power)
- **StringUtils**: String manipulation (reverse, palindrome check, capitalize, count, remove whitespace)
- **UserService**: User management (create, read, update, delete, search)

### Helpers (helpers.ts)

- **ArrayUtils**: Array operations (max, min, sum, average, unique, contains)
- **DateUtils**: Date operations (day difference, leap year, format, age calculation)
- **Validator**: Input validation (email, phone, URL, password strength)

## Coverage Reports

After running `npm run test:coverage`, coverage reports are available at:

- **HTML Report**: `coverage/index.html` - Open in browser for detailed coverage
- **LCOV Report**: `coverage/lcov.info` - Used by SonarQube for analysis
- **Console Report**: Printed to terminal

## SonarQube Integration

The `sonar-project.properties` file configures:

- Project identification and naming
- Source and test directories
- Code coverage report path (LCOV format)
- Exclusion patterns for dependencies and generated files
- TypeScript/JavaScript specific settings

## Troubleshooting

### No Coverage Report

- Ensure Jest is properly configured in `jest.config.js`
- Run `npm run test:coverage` instead of just `npm test`
- Check that `coverage/lcov.info` exists after test run

### SonarQube Not Detecting Coverage

- Verify `sonar.javascript.lcov.reportPaths` in `sonar-project.properties`
- Ensure `coverage/lcov.info` is generated before running analysis
- Check SonarQube logs for LCOV parsing errors

### TypeScript Compilation Issues

- Ensure `tsconfig.json` has correct compiler options
- Run `npm run build` to verify compilation
- Check Node and TypeScript versions match project requirements
