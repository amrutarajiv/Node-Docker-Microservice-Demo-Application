node {
    
    stage('SCM Checkout') {
        git credentialsId: 'github', url: 'https://github.com/amrutarajiv/Node-Docker-Microservice-Demo-Application'
    }
        
    stage('Build Docker image'){
        bat "docker build -t amrutarajiv/test_database ./test-database"
        bat "docker build -t amrutarajiv/users_service ./users-service"
    }
    
    stage('Push Docker image'){
        withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerHubPwd')]) {
            bat "docker login -u amrutarajiv -p ${dockerHubPwd}"
        }        
        
        bat "docker push amrutarajiv/test_database"
        bat "docker push amrutarajiv/users_service"
        
    }
    
    stage('Run the db container'){
     timeout(time: 10, unit: 'MINUTES') {
		bat 'docker run --name db -d -e MYSQL_ROOT_PASSWORD=123 -p 3307:3306 amrutarajiv/test_database'
        bat 'wait_timeout = 28800'
        }
    }

    stage('Run the app'){
        bat 'docker run -d -p 8123:8123 --link db:db -e DATABASE_HOST=DB amrutarajiv/users-service'
    }

}
