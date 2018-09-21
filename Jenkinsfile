pipeline { 
    agent any 
    stages {
      stage('Unit tests') { 
                  steps { 
                sh '''
                pip install virtualenv
                pip show virtualenv
                echo $PATH
                /var/lib/jenkins/.local/lib/python2.7/site-packages/virtualenv env -p python 3.5
                . env/bin/activate
                pip install -r requirements.txt
                '''



}
      }
        }
    }
