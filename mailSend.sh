cat $2 | tr '\n' ';' > /tmp/trs.txt
cat /tmp/trs.txt | tr '\r' ';' > /tmp/trs2.txt
printf "\n" >> /tmp/trs2.txt
netcat $1 8080 < /tmp/trs2.txt

