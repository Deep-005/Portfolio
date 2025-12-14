from django.shortcuts import render, redirect
from .models import *

# Create your views here.
def index(request):
    return render(request, 'index.html')

def contact(request):
    if request.method == "POST":
        nm = request.POST.get('fullname')
        em = request.POST.get('email')
        msg = request.POST.get('message')
        print(">>>>>>>", nm, em, msg) 
        
        if nm and em and msg:
            user = Contact(name=nm, email=em, message=msg)
            user.save()
            return redirect('success') 
        else:
            return redirect('failure') 
    
    return redirect('index')

def success(request):
    return render(request, 'success.html')

def failure(request):
    return render(request, 'failure.html')