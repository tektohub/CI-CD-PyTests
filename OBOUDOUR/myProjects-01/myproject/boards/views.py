#from django.shortcuts import render
from django.shortcuts import render, get_object_or_404

from django.http import HttpResponse
# obo 
from django.http import Http404
from boards.models import Board



# Create your views here.

#old version
#def home(request):
    #return HttpResponse('Hello, World!')
#

#from boards.models import Board

def home(request):
    boards = Board.objects.all()
    boards_names = list()

    for board in boards:
        boards_names.append(board.name)

    response_html = '<br>'.join(boards_names)

    return HttpResponse(response_html)


# v3
def about(request):
    # do something...
    return render(request, 'about.html')

def about_company(request):
    # do something else...
    # return some data along with the view...
    return render(request, 'about_company.html', {'company_name': 'Simple Complex'})

# obo - add view topics 
""" def board_topics(request, pk):
    board = Board.objects.get(pk=pk)
    return render(request, 'topics.html', {'board': board}) """


""" from django.shortcuts import render
from django.http import Http404
from .models import Board """

#def home(request):
    # code suppressed for brevity

""" def board_topics(request, pk):
    try:
        board = Board.objects.get(pk=pk)
    except Board.DoesNotExist:
        raise Http404
    return render(request, 'topics.html', {'board': board}) """

# obo - part3 - 404 page : 

""" def board_topics(request, pk):
    board = get_object_or_404(Board, pk=pk)
    return render(request, 'topics.html', {'board': board}) """


""" from django.shortcuts import render
from django.http import Http404
from .models import Board """



""" def board_topics(request, pk):
    try:
        board = Board.objects.get(pk=pk)
    except Board.DoesNotExist:
        raise Http404
    return render(request, 'topics.html', {'board': board}) """


def board_topics(request, pk):
    board = get_object_or_404(Board, pk=pk)
    return render(request, 'topics.html', {'board': board})




# vue topics :  à compléter ... 
#def board_topics(request, pk):
    # do something...

# no keyword : 
#def board_topics(request, board_id):
    # do something...
#def board_topics(request, id):
    # do something...


