DEPLOYHOST="idbox-3.local"
if [ -n "$1" ]; then
  DEPLOYHOST=$1
else
  echo "No deployment hostname provided."
fi

echo "Deploying PDFs to $DEPLOYHOST"

tar czvf public-gregorian-pdf.tar.gz static/pdf
scp public-gregorian-pdf.tar.gz idbox@$DEPLOYHOST:~/personal-hosting/deployments/
ssh idbox@$DEPLOYHOST /home/idbox/personal-hosting/deploy-gregorian-pdf.sh
rm public-gregorian-pdf.tar.gz
