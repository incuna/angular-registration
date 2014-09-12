angular.module('user_management.registration').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/user_management/registration/register.html',
    "<form register-form ng-submit=register()></form>"
  );


  $templateCache.put('templates/user_management/registration/register_form.html',
    "<div class=form-group><label for=email ng-if=fields.email.label>{{ fields.email.label }}</label><input type=email ng-model=data.email class=form-control id=email maxlength=\"{{ fields.email.max_length }}\"></div><div class=form-group><label for=password ng-if=fields.password.label>{{ fields.password.label }}</label><input type=password ng-model=data.password class=form-control id=password></div><div class=form-group><label for=password2 ng-if=fields.password2.label>{{ fields.password2.label }}</label><input type=password ng-model=data.password2 class=form-control id=password2></div><div class=form-group><label for=name ng-if=fields.name.label>{{ fields.name.label }}</label><input type=text ng-model=data.name class=form-control id=name maxlength=\"{{ fields.name.max_length }}\"></div><button type=submit class=\"btn btn-default\">Register</button>"
  );

}]);
