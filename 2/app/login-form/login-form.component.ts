import { Component } from '@angular/core';

export class User {
	public email = '';
	public password = '';
}

@Component ({
	moduleId: module.id,
	selector: 'login-form',
	templateUrl: 'login-form.component.html',
	styleUrls: ['login-form.component.css']
})

export class LoginFormComponent {
	user: User = new User();
}