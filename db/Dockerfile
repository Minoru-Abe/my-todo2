FROM postgres

COPY ./sql/todo.sql /docker-entrypoint-initdb.d/

#データベースのユーザ名とパスワードを設定
ENV POSTGRES_USER=my_user
ENV POSTGRES_PASSWORD=my_password
ENV POSTGRES_DB=my_database
