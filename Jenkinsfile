pipeline {
    agent any

    stages {
        stage('Ejecutar JenkinsFile CI') {
            steps {
               echo "[EXEC]Version node"
               bat "node -v"
              // sh "node -v"
               
            }
        }
        stage('Instalacion') {
            steps {
                echo "[EXEC] instalar newman"
                bat "npm install newman"
                //sh   "npm install newman"
                echo "[EXEC] instalar reporter htmlextra"
                bat "npm install newman-reporter-htmlextra"
                //sh "npm install newman-reporter-htmlextra"
            }
        }
        stage('Prueba collections') {
            steps {
                 echo "[EXEC] EJECUTANDO POSTMAN"
                 bat "node newman run /Collections/TutorialJenkins.postman_collection.json"
              //   sh "node newman run /Collections/tutorial.postman_collection.json"

            }
        }
     }
}
