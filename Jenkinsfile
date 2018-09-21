pipeline { 
    agent any 
    stages {
      stage('Unit tests') { 
                  steps { 
                sh '''
                python -m virtualenv -p python3 env 
                . env/bin/activate
                pip install -r requirements.txt
                pytest
                '''



}
      }
        }
    }
