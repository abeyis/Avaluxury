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
        stage('Run Tests') {
            steps {
                script {
                    sh 'npx cypress run --env TAGS=@smoke'
                }
            }
        }
    }
}
