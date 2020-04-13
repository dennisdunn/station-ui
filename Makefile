.PHONY: all factory

all: factory
	docker-compose build

factory:
	docker build -t react-builder ./images
