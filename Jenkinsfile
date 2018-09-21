pipeline { 
    agent any 
    stages {
      stage('Unit tests') { 
                  steps { 
                sh '''
                ls
                pwd
                sudo /usr/bin/easy_install virtualenv
                virtualenv env -p python3.5
                . env/bin/activate
                pip install -r requirements.txt
                '''



}
      }
        }
    }
