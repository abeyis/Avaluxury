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
          sh 'npm install'
        }
    }
}
        stage('Run Tests') {
            steps {
                script {
                    sh 'npx cypress run --env TAGS=@smoke'
                }
            }
        }
    }
}
