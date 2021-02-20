from flask import request
def handler():
  if request.method == 'POST':
    email = request.form.get('email')
    password = request.form.get('password')
    if password == "secretpassword":
      return "Success"
  return "Failed"