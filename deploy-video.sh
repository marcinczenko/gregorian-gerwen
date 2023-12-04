DEPLOYHOST="idbox-3.local"
if [ -n "$1" ]; then
  DEPLOYHOST=$1
else
  echo "No deployment hostname provided."
fi

echo "Deploying PDFs to $DEPLOYHOST"

tar czvf public-gregorian-video.tar.gz ./Advent-Bezinning-2023-Processed-4K.mp4
scp public-gregorian-video.tar.gz idbox@$DEPLOYHOST:~/personal-hosting/deployments/
ssh idbox@$DEPLOYHOST /home/idbox/personal-hosting/deploy-gregorian-video.sh
rm public-gregorian-video.tar.gz
