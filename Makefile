start:
	react-native start
android:
	react-native run-android

clean-start:
	rm -rf "/tmp/react-native-packager-cache-*" && rm -rf "/tmp/metro-bundler-cache-*" && rm -rf "/tmp/haste-map-react-native-packager-*"  && yarn start -- --reset-cache
release:
	cd android && ./gradlew assembleRelease
	mv android/app/build/outputs/apk/release/app-release.apk release.apk
