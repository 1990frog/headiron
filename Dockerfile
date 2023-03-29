FROM nginx:1.21.3
ENV TZ=Asia/Shanghai
RUN ln -sf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY ./dist /html/dist
COPY ./nginx.conf /etc/nginx/