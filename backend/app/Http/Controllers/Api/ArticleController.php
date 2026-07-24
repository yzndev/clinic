<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::where('is_published', true)->latest()->get();
        return response()->json($articles);
    }

    public function show($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();
        return response()->json($article);
    }
}
