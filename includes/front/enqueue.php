<?php

function up_enqueue_scripts()
{
    $authURLs = json_encode([
<<<<<<< HEAD
        "signup" => esc_url_raw(rest_url("up/v1/signup")),
        "signin" => esc_url_raw(rest_url("up/v1/signin"))

    ]);

    wp_add_inline_script(
        "udemy-plus-auth-modal-script",
        "const up_auth_rest = {$authURLs}",
        "before"
    );
=======
        "signup" => esc_url_raw(rest_url("up/v1/signup"))
    ]);

    wp_add_inline_script("udemy-plus-auth-modal-view-script", "const up_auth_rest = {$authURLs}", "before");
>>>>>>> dbb81263c4e200feb306b6117de4ec89e88ffce0
}
