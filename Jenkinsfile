pipeline {
  agent any
  stages {
    stage('jenkins-integration-test') {
      steps {
        echo 'Hello from the other side'
        mail(subject: 'Just a test', body: 'Hello it\'s just a test', from: 'itsdennian@gmail.com', to: 'denny.sam@mailinator.com')
      }
    }
  }
}