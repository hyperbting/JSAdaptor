FROM httpd:2.4
COPY ./xrspace_apiadaptor.js /usr/local/apache2/htdocs/js/

COPY ./test/sample_user.js /usr/local/apache2/htdocs/js/
COPY ./test/index.html /usr/local/apache2/htdocs/