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
        stage('Install Dependencies') {
            steps {
               script {
                    // Install required dependencies
                    sh 'yum update -y'
                    sh 'yum install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
                }
               sh 'npm install' 
               }
            }
        
        stage('Run Tests') {
            steps {
               script {
                    sh 'export LD_LIBRARY_PATH=/path/to/directory/containing/libatk:$LD_LIBRARY_PATH'
                    sh 'npx cypress run --env TAGS=\'@smoke\''
                }
                
            }
        }
    }
}
