pipeline {
   agent any

    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
               script {
                    // Start Xvfb
                    sh 'Xvfb :99 -ac &'
                    
                    // Set DISPLAY environment variable
                    env.DISPLAY = ':99'
                    
                    // Run Cypress tests
                    sh 'npm run local && npm run cucumber-report'
                }
                
            }
        }
    }
}
