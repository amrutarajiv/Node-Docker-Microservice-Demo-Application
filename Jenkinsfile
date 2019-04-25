node {
    
    stage('SCM Checkout') {
        git credentialsId: 'github', url: 'https://github.com/amrutarajiv/Node-Docker-Microservice-Demo-Application'
    }
    
    stage('Build and Test'){
        nodejs('node') {
            bat 'npm install'
            bat 'npm test'
        }
    }
    
    stage('Build Docker image'){
        bat "docker build -t amrutarajiv/test_database ./users-service"
        bat "docker build -t amrutarajiv/users_service ./test-database"
    }
    
    stage('Push Docker image'){
        withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerHubPwd')]) {
            bat "docker login -u amrutarajiv -p ${dockerHubPwd}"
        }        
        
        bat "docker push amrutarajiv/test_database"
        bat "docker push amrutarajiv/users_service"
        
    }
}