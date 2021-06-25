#!/usr/bin/python3
import cgi
import subprocess

print("content-type: text/html")
print()

f = cgi.FieldStorage()
img = f.getvalue('i')
cmd = "sudo docker pull {}".format(img)
op = subprocess.getoutput(cmd)
print(op)

