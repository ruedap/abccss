FROM regviz/node-xcb
RUN apt-get install -y locales
RUN locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8
RUN echo "deb http://ftp.jp.debian.org/debian/ stretch-backports main" >> /etc/apt/sources.list
RUN apt-get update && apt-get install -y fonts-noto-cjk-extra/stretch-backports
RUN fc-cache -fv
