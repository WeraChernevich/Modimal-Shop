# Modimal

[Демо сайта](https://werachernevich.github.io/Modimal-Shop/)

[Макет в Figma](https://www.figma.com/design/hAX8LeJN4j23Pwva7vRGPC/modimal---v3?node-id=630-6864&p=f&t=swiONbWl9ffWHZqt-0)

Этот проект представляет собой верстку интернет-магазина, выполненную с использованием Gulp для сборки и автоматизации. Верстка адаптирована дял любых устройств и включает все необходимые секции магазина, а также функциональность свайпера для галерей товаров.

## Технологии

*   HTML5
*   CSS3 (с использованием препроцессора - SCSS/SASS)
*   JavaScript
*   Gulp
*   Swiper

## Особенности

*   Полная верстка десктопной версии интернет-магазина.
*   Реализованы все основные секции:
    *   Шапка сайта
    *   Секция баннера
    *   Категории товаров
    *   Секция избранных товаров
    *   Секция галлереи
    *   Секция отзывов /в разработке
    *   Подвал сайта
*   Использование свайпера для карусели товаров.
*   Верстка с учетом семантики и доступности.
*   Gulp для автоматизации процессов сборки и оптимизации.
*   Использование BEM

## Как использовать (локально)

1.  Клонируйте репозиторий:
    ```bash
    git clone https://github.com/WeraChernevich/Modimal-Shop.git
    ```
2.  Перейдите в папку проекта:
    ```bash
    cd папка_вашего_проекта
    ```
3.  Установите зависимости:
    ```bash
    npm install
    ```
4.  Запустите Gulp:
    ```bash
    gulp
    ```
## Зависимости (npm)

```json
   "dependencies": {
   "@babel/core": "^7.22.5",
		"@babel/preset-env": "^7.22.5",
		"@bdchauvette/gulp-prettier": "^2.0.0",
		"css-loader": "^6.8.1",
		"gulp": "^4.0.2",
		"gulp-autoprefixer": "^8.0.0",
		"gulp-babel": "^8.0.0",
		"gulp-changed": "^4.0.3",
		"gulp-clean": "^0.4.0",
		"gulp-csso": "^4.0.1",
		"gulp-file-include": "^2.3.0",
		"gulp-fonter-fix": "^0.0.1",
		"gulp-group-css-media-queries": "^1.2.2",
		"gulp-htmlclean": "^2.7.22",
		"gulp-imagemin": "^7.1.0",
		"gulp-notify": "^4.0.0",
		"gulp-plumber": "^1.2.1",
		"gulp-rename": "^2.0.0",
		"gulp-replace": "^1.1.4",
		"gulp-sass": "^5.1.0",
		"gulp-sass-glob": "^1.1.0",
		"gulp-server-livereload": "^1.9.2",
		"gulp-sourcemaps": "^3.0.0",
		"gulp-svg-sprite": "^2.0.3",
		"gulp-ttf2woff2": "^4.0.1",
		"gulp-typograf": "^4.1.0",
		"gulp-web-images-css": "^1.3.0",
		"gulp-webp-retina-html": "^1.2.0",
		"i": "^0.3.7",
		"imagemin-webp": "^6.0.1",
		"npm": "^9.9.3",
		"sass": "^1.63.4",
		"style-loader": "^3.3.3",
		"webpack-stream": "^7.0.0"
     }
```
