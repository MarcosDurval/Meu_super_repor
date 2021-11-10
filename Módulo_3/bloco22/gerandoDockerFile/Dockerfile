FROM nginx
COPY . /usr/share/nginx/html
EXPOSE 3000
WORKDIR /usr/share/nginx/html
RUN ls
ENTRYPOINT ["/usr/sbin/nginx"]
CMD ["-g", "daemon off;"]