pipeline { 
    agent any 
     environment {
        projectName = 'ProjectTemplate'
        emailTo = 'jere@arista.com'
        emailFrom = 'eosplus-dev+jenkins@arista.com'
        VIRTUAL_ENV = "${env.WORKSPACE}/venv"
    }
    stages {
      stage('Unit tests') { 
                  steps { 
               sh """
                    echo ${SHELL}
                    [ -d venv ] && rm -rf venv
                    #virtualenv --python=python3.6 venv
                    virtualenv venv
                    #. venv/bin/activate
                    export PATH=${VIRTUAL_ENV}/bin:${PATH}
                    pip install --upgrade pip
                    pip install -r requirements.txt -r dev-requirements.txt
                    make clean
                """


}
      }
        }
    }
