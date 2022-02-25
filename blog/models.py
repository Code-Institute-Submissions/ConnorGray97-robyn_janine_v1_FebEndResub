from django.shortcuts import render
from .models import Post


def blog(request):
    """
    View all blog posts
    """
    posts = Post.objects.all()
    template = 'blog/blog.html'
    context = {
        'posts': posts
    }
    return render(request, template, context)
