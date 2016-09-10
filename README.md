# mean-manager-tasks
First project using MEAN stack to develop a Task Manager application in 3 hours.

Requisites:

- Login;
- User CRUD;
- User roles; (Requester and Responsible)
- App system to manage CRUD;
- Tasks CRUD;

=======
Models:
=======
-> User:
  - { name: '', email: '', role: [''],  password: '' }

-> System:
  - { name: '' }

-> Task:
  - { name: '', system: { system }, requester: { user },  responsibles: [ users ], description: '', difficulty: '', priority: number, creationDate: Date, expectedDate: Date, deliveryDate: Date  }
