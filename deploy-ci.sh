DEPLOYHOST="gregorian-gerwen.xyz"
echo "${DEPLOYKEY}" > tmpkey
chmod 600 tmpkey
yarn build
rm -rf public/pdf
tar czvf public-gregorian.tar.gz public/
scp -i tmpkey public-gregorian.tar.gz idbox@$DEPLOYHOST:~/personal-hosting/deployments/
ssh -i tmpkey idbox@$DEPLOYHOST /home/idbox/personal-hosting/deploy-gregorian.sh
rm public-gregorian.tar.gz
rm -f tmpkey
