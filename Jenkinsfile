pipeline { 
    agent any 
    stages {
      stage('Unit tests') { 
                    steps { 

                        sh 'pip install virtualenv'
      withPythonEnv('/usr/bin/python') {
                sh 'virtualenv env -p python3.5'
                sh '. env/bin/activate'

                    sh 'pip install -r requirements.txt'
                                    echo 'pytest testing again'


}
      }
        }
    }}
