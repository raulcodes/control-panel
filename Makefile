deploy:
	npm run build; scp -r ~/Documents/smart_home_control_panel/control_panel/build/ pi@192.168.1.164:/var/www/
