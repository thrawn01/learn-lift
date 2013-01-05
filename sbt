JREBELJAR="/usr/share/java/jrebel.jar"
java -Drebel.lift_plugin=true -noverify -javaagent:$JREBELJAR \
 -Xmx1024M -Xss2M -XX:MaxPermSize=512m -XX:+CMSClassUnloadingEnabled -jar \
 `dirname $0`/sbt-launch-0.12.jar "$@"
