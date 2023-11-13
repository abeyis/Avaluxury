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
                    sh 'sudo yum install -y libX11 libXcomposite libXcursor libXdamage libXext libXi libXtst libXrandr libXrender libXss libasound2 libatk-1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6'
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
                    sh 'npx cypress run --env TAGS=@smoke'
                }
            }
        }
    }
}
