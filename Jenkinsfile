pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        DISPLAY = ':99'
        LD_LIBRARY_PATH = "/path/to/directory/containing/libatk:${env.LD_LIBRARY_PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Xvfb') {
            steps {
                script {
                    sh 'sudo yum update -y'
                    sh 'sudo yum install -y Xvfb'
                }
            }
        }

        stage('Start Xvfb') {
            steps {
                script {
                    sh 'Xvfb :99 -ac'  // Start Xvfb on display :99
                    sh 'export DISPLAY=:99'  // Set the DISPLAY environment variable
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'xvfb-run npx cypress run --env TAGS=@smoke'
                }
            }
        }
    }
}
