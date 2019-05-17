node {
    
    def compose = "docker-compose -f docker-compose.yml -p nodeapp"
		
	stage('SCM Checkout') {
        git credentialsId: 'github', url: 'https://github.com/amrutarajiv/Node-Docker-Microservice-Demo-Application'
    }
        
/*    stage('Build Docker image'){
        bat "docker build -t amrutarajiv/test_database ./test-database"
        bat "docker build -t amrutarajiv/users_service ./users-service"
    }
    
    stage('Push Docker image'){
        withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerHubPwd')]) {
            bat "docker login -u amrutarajiv -p ${dockerHubPwd}"
        }        
        
        bat "docker push amrutarajiv/test_database"
        bat "docker push amrutarajiv/users_service"
        
    } */
    
    stage('Build containers'){
	    timeout(time: 20, unit: 'MINUTES'){
	bat "${compose} build --pull"
	    }
    }
    
     stage('Run containers'){
         timeout(time: 20, unit: 'MINUTES'){
	        bat "${compose} up -d"
         }
	}

}
