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
