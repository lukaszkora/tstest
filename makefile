# This is setup for DigitalOcean
digitalocean-build:
	@docker-compose -f docker-compose.yml -f docker-compose.digitalocean.yml -p tstest build

digitalocean-run:
	@docker-compose -f docker-compose.yml -f docker-compose.digitalocean.yml -p tstest up -d serverapp

digitalocean-run-log:
	@docker-compose -f docker-compose.yml -f docker-compose.digitalocean.yml -p tstest up serverapp

digitalocean-stop:
	@docker-compose -f docker-compose.yml -f docker-compose.digitalocean.yml -p tstest stop

digitalocean-clean:    stop
	@docker-compose -f docker-compose.yml -f docker-compose.digitalocean.yml -p tstest rm serverapp

digitalocean-clean-data: clean
	@docker-compose -f docker-compose.yml -f docker-compose.digitalocean.yml -p tstest rm -v mongo

digitalocean-clean-images:
	@docker rmi `docker images -q -f "dangling=true"`