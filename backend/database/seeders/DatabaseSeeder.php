<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // خدمات نمونه
        \App\Models\Service::create([
            'title' => 'کفش طبی سفارشی',
            'slug' => 'custom-medical-shoes',
            'description' => 'طراحی و ساخت کفش‌های طبی متناسب با ساختار پا و تجویز پزشک.',
            'is_active' => true,
        ]);

        \App\Models\Service::create([
            'title' => 'زانو بند ارتوپدی',
            'slug' => 'orthopedic-knee-brace',
            'description' => 'تامین زانو بندهای طبی استاندارد برای حمایت و کاهش درد مفصل زانو.',
            'is_active' => true,
        ]);

        // پزشکان نمونه
        \App\Models\Doctor::create([
            'name' => 'دکتر سید علی حسینی',
            'specialty' => 'متخصص ارتوپدی',
            'bio' => 'فلوشیپ جراحی ارتوپدی کودکان با بیش از ۱۵ سال سابقه.',
        ]);

        \App\Models\Doctor::create([
            'name' => 'مهندس مریم احمدی',
            'specialty' => 'فنی ارتوپد',
            'bio' => 'کارشناس ارشد طراحی و ساخت ارتز و پروتز.',
        ]);

        // مقالات نمونه
        \App\Models\Article::create([
            'title' => 'چگونه کفش طبی مناسب انتخاب کنیم؟',
            'slug' => 'how-to-choose-medical-shoes',
            'body' => 'انتخاب کفش طبی مناسب تاثیر زیادی در کاهش دردهای کمر و زانو دارد...',
            'is_published' => true,
        ]);
    }
}
