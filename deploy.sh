DEPLOYHOST="idbox-3.local"
if [ -n "$1" ]; then
  DEPLOYHOST=$1
else
  echo "No deployment hostname provided."
fi

echo "Deploying to $DEPLOYHOST"

yarn build
rm -rf public/pdf
tar czvf public-gregorian.tar.gz public/
scp public-gregorian.tar.gz idbox@$DEPLOYHOST:~/personal-hosting/deployments/
ssh idbox@$DEPLOYHOST /home/idbox/personal-hosting/deploy-gregorian.sh
rm public-gregorian.tar.gz
