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
    
    stage('Run the containers'){
        docker.image('amrutarajiv/test_database').withRun('-e "MYSQL_ROOT_PASSWORD=123"') { c ->
        docker.image('amrutarajiv/test_database').inside("--link ${c.id}:db") {
            /* Wait until mysql service is up */
            bat 'while ! mysqladmin ping -hdb --silent; do sleep 1; done'
        }
        docker.image('amrutarajiv/users_service').inside("--link ${c.id}:db") {
            /*
             * Run some tests which require MySQL, and assume that it is
             * available on the host name `db`
             */
            bat 'make check'
            }
        }
    }
}
