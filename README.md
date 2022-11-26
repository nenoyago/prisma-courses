## To create POSTGRES DB with DOCKER

- Run the command below, make sure you have installed docker:

* docker run --name postgres_courses -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=courses_prisma -p 5432:5432 -d postgres
