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
            // Detect the package manager and install the required library
                    if (isUnix()) {
                        // For Linux systems
                        sh '''
                            if command -v apt-get &> /dev/null; then
                                sudo apt-get install libatk1.0-0
                            elif command -v yum &> /dev/null; then
                                sudo yum install atk
                            else
                                echo "Unsupported package manager"
                                exit 1
                            fi
                        '''
                    } else {
                        // For non-Linux systems (you may need to adjust this part)
                        echo "Unsupported operating system"
                        exit 1
                    }
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
