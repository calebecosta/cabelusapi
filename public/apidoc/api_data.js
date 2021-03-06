define({ "api": [
  {
    "type": "get",
    "url": "/gruposistema/:id",
    "title": "Listar um grupo de sistema",
    "name": "Get_Grupo_de_Sistema",
    "group": "Grupos_de_Sistema",
    "header": {
      "examples": [
        {
          "title": "Header:",
          "content": "{\n \"Authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "grupos",
            "description": "<p>Lista com os grupos de segurança do sistema.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"nome\": \"Administrador\",\n  \"funcoes\":\n   [\n    {\n     \"nome\": \"Acessar área Restrita\"\n    }\n   ]\n },",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Internal Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"error\": \"Internal Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/GrupoSistema/index.js",
    "groupTitle": "Grupos_de_Sistema"
  },
  {
    "type": "get",
    "url": "/gruposistema",
    "title": "Listar todos usuários",
    "name": "Get_Grupos_de_Sistema",
    "group": "Grupos_de_Sistema",
    "header": {
      "examples": [
        {
          "title": "Header:",
          "content": "{\n \"Authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "grupos",
            "description": "<p>Lista com os grupos de segurança do sistema.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"nome\": \"Administrador\",\n  \"funcoes\":\n    [\n     {\n       \"nome\": \"Cadastrar novo Administrador\"\n     },\n     {\n       \"nome\": \"Acessar área Restrita\"\n     }\n    ]\n },\n {\n  \"nome\": \"Funcionário\",\n  \"funcoes\":\n   [\n    {\n     \"nome\": \"Acessar área Restrita\"\n    }\n   ]\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/GrupoSistema/index.js",
    "groupTitle": "Grupos_de_Sistema"
  }
] });
