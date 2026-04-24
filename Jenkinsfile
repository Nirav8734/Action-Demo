pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // Make sure configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-username/repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}