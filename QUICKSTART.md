# Quick Start Guide

## One-Step Setup

```bash
bash setup.sh
```

This will:

1. ✅ Check Node.js installation
2. ✅ Install npm dependencies
3. ✅ Build the TypeScript project
4. ✅ Run tests with coverage
5. ✅ Generate LCOV report for SonarQube

## Manual Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Tests with Coverage

```bash
npm run test:coverage
```

Output:

- Coverage reports in `coverage/` directory
- LCOV file at `coverage/lcov.info`

### Step 3: Run SonarQube Analysis

#### Option A: Local SonarQube Server

```bash
sonar-scanner \
  -Dsonar.projectBaseDir=$(pwd) \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=admin
```

#### Option B: Using Docker Compose

```bash
# Start SonarQube server (first time only)
docker-compose up -d

# Run analysis
docker-compose exec sonar-scanner sonar-scanner

# Stop SonarQube server
docker-compose down
```

#### Option C: Using Docker Scanner Image Directly

```bash
docker run --rm \
  -e SONAR_HOST_URL=http://host.docker.internal:9000 \
  -e SONAR_LOGIN=admin \
  -v $(pwd):/usr/src \
  sonarsource/sonar-scanner-cli
```

## Project Commands

| Command                 | Purpose                          |
| ----------------------- | -------------------------------- |
| `npm run build`         | Compile TypeScript to JavaScript |
| `npm test`              | Run tests (no coverage)          |
| `npm run test:coverage` | Run tests with coverage report   |
| `npm run clean`         | Remove build and coverage files  |

## View Coverage Report

After running `npm run test:coverage`:

```bash
# Open in browser (macOS)
open coverage/index.html

# Or on Linux
xdg-open coverage/index.html

# Or on Windows
start coverage/index.html
```

## Project Structure Breakdown

### Source Code (`src/`)

- **utilities.ts** - Core business logic classes
  - Calculator (math operations)
  - StringUtils (string manipulation)
  - UserService (CRUD operations)
- **helpers.ts** - Utility functions
  - ArrayUtils (array operations)
  - DateUtils (date operations)
  - Validator (input validation)

### Tests (`tests/`)

- Comprehensive Jest test suites
- 6 test files covering all source code
- 50+ test cases with good coverage

## Expected Coverage

After running tests, you should see:

- **Statements**: 85-90%
- **Branches**: 75-85%
- **Functions**: 85-90%
- **Lines**: 85-90%

## Troubleshooting

### Tests won't run

```bash
npm install
npm run build
npm test
```

### No coverage report generated

- Check Jest configuration in `jest.config.js`
- Ensure `coverage/` directory permissions
- Delete `node_modules/` and reinstall:
  ```bash
  rm -rf node_modules coverage
  npm install
  npm run test:coverage
  ```

### SonarQube doesn't show coverage

1. Verify LCOV file exists: `ls -la coverage/lcov.info`
2. Check `sonar-project.properties` has correct path
3. Restart SonarQube analysis after coverage generation

## Docker Quick Start

```bash
# Build and run everything
docker-compose up -d

# Wait for SonarQube to start (30 seconds)
sleep 30

# Install and run tests
npm install
npm run test:coverage

# Run analysis
docker-compose exec sonar-scanner sonar-scanner

# View results
# Open browser to http://localhost:9000

# Cleanup
docker-compose down
```

## CI/CD Integration

See `.github-actions.yml` for GitHub Actions workflow example that:

- Runs tests automatically on push/PR
- Generates coverage reports
- Sends results to SonarQube
- Enforces quality gates

## Need Help?

Check the main [README.md](README.md) for detailed documentation.
