pipeline { 
    agent any 
    stages {
      stage('Unit tests') { 
                    steps { 

      withPythonEnv('/usr/bin/python3') {
                        sh 'pip install virtualenv'
                sh 'virtualenv env -p python3.5'
                sh '. env/bin/activate'

                    sh 'pip install -r requirements.txt'
                                    echo 'pytest testing again'


}
      }
        }
    }}
