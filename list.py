#!/usr/bin/python3
import cgi
import subprocess

print("content-type: text/html")
print()

cmd = 'sudo docker ps -a | cut -d " " -f 1,2,5,4,10,8,17,18,19,40,31'
op = subprocess.getoutput(cmd)
print(op)

