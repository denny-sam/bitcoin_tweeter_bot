pipeline { 
    agent any 
    stages {
        stage('Unit tests') { 
            steps { 
                sh 'pip install virtualenv'
                sh 'virtualenv env -p python3.5'
                sh '. env/bin/activate'
                echo 'pytest testing again'
            }
        }
    }
}