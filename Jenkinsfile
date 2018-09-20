pipeline { 
    agent any 
    stages {
      stage('Unit tests') { 
                    steps { 

      withPythonEnv('/usr/bin/python3') {
                    sh 'pip install -r requirements.txt'

}
      }
        }
    }}
