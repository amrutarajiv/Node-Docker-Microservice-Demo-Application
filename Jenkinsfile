node {
    
    def compose = "docker-compose -f docker-compose.yml -p nodeapp"
		
	stage('SCM Checkout') {
        git credentialsId: 'github', url: 'https://github.com/amrutarajiv/Node-Docker-Microservice-Demo-Application'
    }
        
<<<<<<< HEAD
    stage('Build Docker image'){
=======
/*    stage('Build Docker image'){
>>>>>>> c111c019b9e4e59b0e78d7e80f5b9a890c1c5a38
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
    
<<<<<<< HEAD
    stage('Run the db container'){
        timeout(time: 10, unit: 'MINUTES') {
        bat 'docker run --name db -d -e MYSQL_ROOT_PASSWORD=123 -p 3307:3306 amrutarajiv/test_database'
        }
    }

    stage('Run the app'){
        docker run -d -p 8123:8123 --link db:db -e DATABASE_HOST=DB amrutarajiv/users-service
    }
=======
    stage('Build containers'){
	    timeout(time: 20, unit: 'MINUTES'){
	bat "${compose} build --pull"
	    }
    }
    
     stage('Run containers'){
	bat "${compose} up -d"
	}
>>>>>>> c111c019b9e4e59b0e78d7e80f5b9a890c1c5a38

}
