pipeline {
   agent any

    tools {
        nodejs 'Built-In Node'
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
                sh 'npm run TestWithReportGeneration'
            }
        }
    }
}
