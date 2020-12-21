# A next.js APP with some content from Contentful

## next.js Image optimation included!

## included some i18n elements... 

### some parts of the APP are not best practice!

[on vercel]("https://next-l06c-blog.vercel.app/")
[on nginx]("https://l06c.oje.ooo/)


#### nginx conf

    server {
        if ($host = l06c.oje.ooo) {
            return 301 https://$host$request_uri;
        } # managed by Certbot


        listen 80;
        server_name l06c.oje.ooo;
        root /var/www/password123456/system/nginx-root; # Used for acme.sh SSL verification (https://acme.sh)

        location ~ /.well-known {
           allow all;
        }

        client_max_body_size 50m;
    }

    server {
        listen 443 ssl http2;
        server_name l06c.oje.ooo;
        root /home/password123456/l06c;

        index index.html;

        charset utf-8;

        ssl_session_timeout 5m;
        ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";
        ssl_dhparam /etc/nginx/snippets/dhparam4096.pem;


        location = /favicon.ico { access_log off; log_not_found off; }
        location = /robots.txt  { access_log off; log_not_found off; }

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }    

        location ~ \.php$ {
            include fastcgi_params;
            fastcgi_intercept_errors on;
            fastcgi_pass php;
            #The following parameter can be also included in fastcgi_params file
            fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;    
        }  


        location ~ /\.ht {
            deny all;
        }

        # location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        #     expires max;
        #     log_not_found off;
        # }

        # Rewrite robots.txt
        rewrite ^/robots.txt$ /index.php last;


        client_max_body_size 50m;
        ssl_certificate /etc/letsencrypt/live/l06c.oje.ooo/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/l06c.oje.ooo/privkey.pem;
        # managed by Certbot
    }


#### pm2 
    pm2 start npm --name "next-blog" -- start 