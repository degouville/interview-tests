# Symfony Demo App

A simple Symfony App.

## Installation

1. Install and check PHP **PHP ^v7.1 & MySQL v5.7**

2. Install [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)

3. Install the dependencies `composer install`

4. Replace in `db_user`,`db_password` & `db_name` in your **.env**

5. Install demo's dummy datas
```
php bin/console doctrine:database:create
php bin/console doctrine:migrations:diff
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load -n
```

That's all.
