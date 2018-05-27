FROM regviz/node-xcb
RUN apt-get install locales
RUN locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8
RUN apt-get install fonts-ipafont-gothic fonts-ipafont-mincho
RUN fc-cache -fv
