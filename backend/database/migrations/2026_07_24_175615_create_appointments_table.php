<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('phone_number');
            $table->foreignId('service_id')->nullable()->constrained()->nullOnDelete(); // خدمت مورد نیاز (ارتباط با جدول خدمات)
            $table->text('message')->nullable(); // توضیحات بیمار
            $table->enum('status', ['pending', 'contacted', 'canceled'])->default('pending'); // وضعیت پیگیری
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
