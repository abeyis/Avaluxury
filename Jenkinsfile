pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

   environment {
        DISPLAY = ':99'
        LD_LIBRARY_PATH = '/path/to/directory/containing/libatk:' + 'env.LD_LIBRARY_PATH'
        PATH = "/path/to/directory/containing/xvfb-run:$PATH"
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
                    sh 'Xvfb :99 -ac'
                    sh 'export DISPLAY=:99'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
            sh 'export PATH=$PATH:/path/to/directory/containing/xvfb-run'  // Add the directory to the PATH
            sh 'xvfb-run npx cypress run --env TAGS=@smoke'
        }
            }
        }
    }
}
