#!/bin/bash

# Setup script for test-coverage-project

echo "🚀 Setting up SonarQube Test Coverage Project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Failed to build project"
    exit 1
fi

echo "✅ Project built successfully"

# Run tests
echo "🧪 Running tests..."
npm run test:coverage

if [ $? -ne 0 ]; then
    echo "❌ Tests failed"
    exit 1
fi

echo "✅ Tests passed with coverage report generated"

echo ""
echo "✨ Setup complete! Here's what to do next:"
echo ""
echo "1. View coverage report:"
echo "   open coverage/index.html"
echo ""
echo "2. Run SonarQube analysis (if SonarQube is running on localhost:9000):"
echo "   sonar-scanner -Dsonar.host.url=http://localhost:9000 -Dsonar.login=admin"
echo ""
echo "3. Or use Docker Compose to run SonarQube:"
echo "   docker-compose up -d"
echo "   npm run test:coverage"
echo "   docker-compose exec sonar-scanner sonar-scanner"
echo ""
