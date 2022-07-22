<?php

return [
    'configs' => [
        'admin' => [
            'entrypoints' => [
                'paths' => 'resources/js/admin.js',
            ],
            'dev_server' => [
                'url' => env('ADMIN_DEV_SERVER_URL', 'http://localhost:3000'),
            ],
            'build_path' => 'build/admin',
        ],

        'web' => [
            'entrypoints' => [
                'paths' => 'resources/js/web.js',
            ],
            'dev_server' => [
                'url' => env('WEB_DEV_SERVER_URL', 'http://localhost:3001'),
            ],
            'build_path' => 'build/web',
        ],
    ],
];
