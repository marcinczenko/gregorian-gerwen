DEPLOYHOST="idbox-3.local"
FILENAME="*.mp4"
if [ -n "$2" ]; then
  DEPLOYHOST=$2
else
  echo "No deployment hostname provided."
fi

echo "Deploying PDFs to $DEPLOYHOST"

if [ -n "$1" ]; then
  FILENAME=$1
  scp $FILENAME idbox@$DEPLOYHOST:~/personal-hosting/deployments/gregorian-gerwen.xyz/video
else
  echo "No file name provided. Will create archive with all files matchin *.mp4 pattern."
  tar czvf public-gregorian-video.tar.gz ./*.mp4
  scp public-gregorian-video.tar.gz idbox@$DEPLOYHOST:~/personal-hosting/deployments/
  ssh idbox@$DEPLOYHOST /home/idbox/personal-hosting/deploy-gregorian-video.sh
  rm public-gregorian-video.tar.gz
fi
