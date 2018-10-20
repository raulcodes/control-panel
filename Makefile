deploy:
	npm run build; scp -r ~/Documents/smart_home_control_panel/control_panel pi@192.168.1.164:~/
