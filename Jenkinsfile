pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        DISPLAY = ':99'
        LD_LIBRARY_PATH = '/path/to/directory/containing/libatk:' + 'env.LD_LIBRARY_PATH'
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
                    sh 'echo "jenkins ALL=(ALL) NOPASSWD: ALL" | sudo tee -a /etc/sudoers.d/jenkins'
                    sh 'sudo yum install -y Xvfb'
                }
            }
        }

        stage('Start Xvfb') {
            steps {
                script {
                    sh 'Xvfb :99 -ac'
                    sh 'export DISPLAY=:99'
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
