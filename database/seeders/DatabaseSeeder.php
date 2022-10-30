<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::create([
            'name' => 'Ryan Ganteng',
            'email' => 'ryan@example.com',
            'username' => 'hasbie',
            'location' => 'Bandung',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
        ]);
    }
}
