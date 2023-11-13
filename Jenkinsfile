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
           if command -v apt-get &> /dev/null; then
    sudo apt-get install libatk1.0-0
elif command -v yum &> /dev/null; then
    sudo yum install atk
else
    echo "Unsupported package manager"
    exit 1
fi

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
