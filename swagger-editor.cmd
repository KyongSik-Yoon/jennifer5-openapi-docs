podman run -d -p 80:8080 -v api/api-v2.yaml:/tmp/swagger.json -e SWAGGER_FILE=/tmp/swagger.json swaggerapi/swagger-editor