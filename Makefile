nvm:
	. ${NVM_DIR}/nvm.sh && nvm use && nvm current
install: nvm
	npm i
dev: nvm
	npm start
build: nvm
	npm run build
server: nvm
	npm run server