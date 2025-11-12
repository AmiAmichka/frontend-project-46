[![Actions Status](https://github.com/AmiAmichka/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AmiAmichka/frontend-project-46/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=AmiAmichka_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=AmiAmichka_frontend-project-46)

# Вычислитель отличий (gendiff)

**Вычислитель отличий** — CLI-утилита для сравнения файлов и отображения различий в удобном виде.

Позволяет определять, какие данные были добавлены, удалены или изменены между двумя структурами (JSON/YAML).  
Полезен при работе с конфигурационными файлами или любыми структурированными данными.

---

## Возможности

- Поддержка форматов **JSON** и **YAML**  
- Сравнение **вложенных структур данных** любой глубины  
- Поддержка нескольких **форматов вывода**:
  - `stylish` — древовидный формат (по умолчанию)  
  - `plain` — текстовый список изменений  
  - `json` — результат в JSON-виде

---

## Установка

```bash
# Клонирование репозитория
git clone https://github.com/AmiAmichka/frontend-project-46.git
cd gendiff

# Установка зависимостей
npm install

# Установка утилиты в систему (глобально)
npm link
```

---

##  Использование

### Сравнение двух файлов
```bash
gendiff path/to/file1.json path/to/file2.json
```
### Указание формата вывода
```bash
gendiff --format plain path/to/file1.yml path/to/file2.yml
```

## Примеры вывода

### Формат plain
```bash
Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
```
### Формат stylish
```bash
{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```

### Формат JSON
```bash
[
  {
    "key": "common",
    "type": "nested",
    "oldValue": {
      "setting1": "Value 1",
      "setting2": 200,
      "setting3": true,
      "setting6": { "key": "value", "doge": { "wow": "" } }
    },
    "newValue": {
      "follow": false,
      "setting1": "Value 1",
      "setting3": null,
      "setting4": "blah blah",
      "setting5": { "key5": "value5" },
      "setting6": {
        "key": "value",
        "ops": "vops",
        "doge": { "wow": "so much" }
      }
    },
    "childrenResult": [
      {
        "key": "setting1",
        "type": "unchanged",
        "oldValue": "Value 1",
        "newValue": "Value 1"
      },
      { "key": "setting2", "type": "deleted", "oldValue": 200 },
      {
        "key": "setting3",
        "type": "changed",
        "oldValue": true,
        "newValue": null
      },
      {
        "key": "setting6",
        "type": "nested",
        "oldValue": { "key": "value", "doge": { "wow": "" } },
        "newValue": {
          "key": "value",
          "ops": "vops",
          "doge": { "wow": "so much" }
        },
        "childrenResult": [
          {
            "key": "key",
            "type": "unchanged",
            "oldValue": "value",
            "newValue": "value"
          },
          {
            "key": "doge",
            "type": "nested",
            "oldValue": { "wow": "" },
            "newValue": { "wow": "so much" },
            "childrenResult": [
              {
                "key": "wow",
                "type": "changed",
                "oldValue": "",
                "newValue": "so much"
              }
            ]
          },
          {
            "key": "ops",
            "type": "added",
            "oldValue": null,
            "newValue": "vops"
          }
        ]
      },
      { "key": "follow", "type": "added", "oldValue": null, "newValue": false },
      {
        "key": "setting4",
        "type": "added",
        "oldValue": null,
        "newValue": "blah blah"
      },
      {
        "key": "setting5",
        "type": "added",
        "oldValue": null,
        "newValue": { "key5": "value5" }
      }
    ]
  }
]
```

## Аскинемы

Task 4, 6 - https://asciinema.org/a/4XVjOh0eZGj0l8Y12mKgcizY6

Task 8 - https://asciinema.org/a/TA8SFmFqOsURfyTQdHTXzi3XV

Task 9 - https://asciinema.org/a/Gn4Mg0W4J6F9MjrAASVmwYraY