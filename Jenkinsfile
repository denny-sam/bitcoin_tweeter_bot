pipeline { 
    agent any 
    stages {
      stage('Unit tests') { 
                  steps { 
                sh '''
                export PATH="$PATH:/var/lib/jenkins/.local/lib/python2.7/site-packages/"
                ls /var/lib/jenkins/.local/lib/python2.7/site-packages
                pip install virtualenv
                pip show virtualenv
                echo $PATH
                python -m virtualenv env 
                . env/bin/activate
                pip install -r requirements.txt
                '''



}
      }
        }
    }
