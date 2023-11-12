pipeline {
   agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
               tool 'NodeJS'
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
