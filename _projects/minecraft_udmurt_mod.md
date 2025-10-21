---
layout: project
title: Удмуртский мод для Minecraft
description: Окунись в удмуртскую культуру прямо в Minecraft!
order: 6
avatar: /assets/images/minecraft-udmurt-mod/logo.png
screenshots:
  - /assets/images/minecraft-udmurt-mod/screen1.png
  - /assets/images/minecraft-udmurt-mod/screen2.png
  - /assets/images/minecraft-udmurt-mod/screen3.png
  - /assets/images/minecraft-udmurt-mod/screen4.png
  - /assets/images/minecraft-udmurt-mod/screen5.png
  - /assets/images/minecraft-udmurt-mod/screen6.png
tags:
  - игра
  - удмуртский язык
  - minecraft
  - мод
github_link: https://github.com/vorgoron/minecraft-udmurt-mod

---

## 📖 О моде

Удмуртский мод добавляет в Minecraft элементы традиционной удмуртской культуры — национальную еду, одежду, музыкальные инструменты и многое другое!

## ✨ Особенности

🍽️ **Традиционная кухня**
- Табани, перепечи с разной начинкой и пельмени
- Еда даёт силы

👗 **Национальные украшения**
- Монисто и венок из италмас

🎵 **Музыкальные инструменты**
- Крезь — традиционный удмуртский инструмент
- Настоящие звуки инструмента
- Отпугивает врагов, когда играешь на инструменте

🌺 **Новые растения**
- Италмас — редкий священный цветок удмуртов

## 🚀 Установка через TLauncher

### Шаг 0: Установи TLauncher
1. Перейди на [официальный сайт TLauncher](https://tlauncher.org/ru/)
2. Скачай программу для своей операционной системы (Windows, Linux или Mac)
3. Установи TLauncher

### Шаг 1: Установи Forge
1. Открой **TLauncher**
2. В списке версий найди **Forge 1.19.2** (версия 43.3.0 или выше)
3. Выбери эту версию и нажми **"Установить"**
4. Дождись окончания установки

### Шаг 2: Скачай мод
1. Перейди на страницу [Releases](https://github.com/vorgoron/minecraft-udmurt-mod/releases)
2. Скачай файл **udmurt-mod-1.0.0.jar**

### Шаг 3: Установи мод
1. Открой папку с модами:
   - Windows: Нажми `Win + R`, введи `%appdata%/.minecraft/mods` и нажми Enter
   - Linux/Mac: `~/.minecraft/mods`
2. Если папки `mods` нет — создай её
3. Скопируй скачанный `.jar` файл в папку `mods`

### Шаг 4: Запусти игру
1. В TLauncher выбери версию **Forge 1.19.2**
2. Нажми **"Войти в игру"**
3. Готово! 🎉

## 🎮 Быстрый старт

После запуска игры:
1. Создай новый мир или зайди в существующий
2. Открой творческий инвентарь (`E`) и найди вкладку с предметами мода
3. Попробуй скрафтить перепечи или табани!
4. Найди италмас в лесу и сплети венок

## 🛠️ Сборка из исходников

Для разработчиков:

```bash
# Клонировать репозиторий
git clone https://github.com/vorgoron/minecraft-udmurt-mod.git
cd udmurt-mod

# Собрать мод
./gradlew build

# Запустить клиент для тестирования
./gradlew runClient
```

Собранный мод будет в `build/libs/minecraft-udmurt-mod-1.0.0.jar`
