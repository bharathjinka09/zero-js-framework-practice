'''
Usage

http://127.0.0.1:3000/python/args/?name=bharath

'''

from flask import request
def handler():
  name = request.args.get('name')
  return "Hello, " + name