define({ "api": [
  {
    "type": "get",
    "url": "/api/students/",
    "title": "Get all students",
    "name": "GetAllStudents",
    "group": "Student",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Student[]",
            "optional": false,
            "field": "docs",
            "description": "<p>Array of students</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "views/studentViews.js",
    "groupTitle": "Student"
  },
  {
    "type": "get",
    "url": "/api/students/:id",
    "title": "Get one student",
    "name": "GetOneStudent",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The ObjectID of a student</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ObjectID of student</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "netid",
            "description": "<p>NetID of student</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of student</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of student</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of student</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>Classification of student</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "credits",
            "description": "<p>Number of credits student has</p>"
          },
          {
            "group": "Success 200",
            "type": "Class[]",
            "optional": false,
            "field": "classes",
            "description": "<p>Array of classes student is in</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "views/studentViews.js",
    "groupTitle": "Student"
  },
  {
    "type": "get",
    "url": "/api/students/netid/:netid",
    "title": "Get one student by netid",
    "name": "GetOneStudentByNetId",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "netid",
            "description": "<p>NetId of Student</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>ObjectID of student</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "netid",
            "description": "<p>NetID of student</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of student</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of student</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of student</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>Classification of student</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "credits",
            "description": "<p>Number of credits student has</p>"
          },
          {
            "group": "Success 200",
            "type": "Class[]",
            "optional": false,
            "field": "classes",
            "description": "<p>Array of classes student is in</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "views/studentViews.js",
    "groupTitle": "Student"
  },
  {
    "type": "post",
    "url": "/api/students/",
    "title": "Create a studnet",
    "name": "PostOneStudent",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "netid",
            "description": "<p>The netid of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of student</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "classification",
            "defaultValue": "UG",
            "description": "<p>The classification of student</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "credits",
            "defaultValue": "0",
            "description": "<p>The credits of student</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Student",
            "optional": false,
            "field": "docs",
            "description": "<p>The information of student, look at GetOneStudent</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "views/studentViews.js",
    "groupTitle": "Student"
  }
] });
