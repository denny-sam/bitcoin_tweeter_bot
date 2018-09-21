pipeline { 
    agent any 
    stages {
      stage('Unit tests') { 
                  steps { 
                sh '''
                export PATH="$PATH:/var/lib/jenkins/.local/lib/python2.7/site-packages/"
                ls /var/lib/jenkins/.local/lib/python2.7/site-packages
                echo $PATH
                python -m virtualenv -p python3 env 
                . env/bin/activate
                pip install -r requirements.txt
                '''



}
      }
        }
    }
