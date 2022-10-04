FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE=target/fighting-*.jar app.jar
COPY ${JAR_FILE} docker-springboot.jar
EXPOSE 8080
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/docker-springboot.jar"]