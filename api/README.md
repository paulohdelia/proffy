# Funcionalidades

## Conexões

- Rota para listar o total de conexões realizadas
```http
  GET - /connections
```

- Rota para criar uma nova conexão
```http
  POST - /connections
```

```JSON
  {
	  "user_id": 1
  }
```

## Aulas

- Rota para listar aulas - *é necessário preencher os filtros*
  - Filtrar por matéria, horário e dia da semana
```http
  GET - /classes?subject=art
                  &time=13:44
                  &week_day=0

  week_day - De 0 a 6, sendo 0 domingo e 6 sábado
  time - Formado por hora e minuto -> 19:00 | 21:30 | 03:55
```

- Rota para criar uma aula
```http
  POST - /classes
```
```JSON
  {
    "name": "Paulo D'Elia",
    "avatar": "https://avatars3.githubusercontent.com/u/47276018?s=460&v=4",
    "whatsapp": "11999999999",
    "bio": "Front End Developer",
    "subject": "Matemática",
    "cost": "120",
    "schedule": [
      { "week_day": 1, "from": "8:00", "to": "12:00" },
      { "week_day": 3, "from": "11:00", "to": "17:00" },
      { "week_day": 4, "from": "07:00", "to": "09:00" },
      { "week_day": 5, "from": "16:00", "to": "20:00" }
    ]
  }
```

