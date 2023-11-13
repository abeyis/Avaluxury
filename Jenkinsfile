pipeline {
   agent any

    tools {
        nodejs 'NodeJS'
    }
    environment {
        DISPLAY = ':99'
        PATH = "/usr/local/bin:$PATH"  // Add the path to the location of the installed libraries
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
                    sh 'Xvfb :99 -ac &'  // Start Xvfb
                    sh 'export DISPLAY=:99'  // Set DISPLAY environment variable
                    sh 'npm run local && npm run cucumber-report'  // Run Cypress tests
                }
                
            }
        }
    }
}
