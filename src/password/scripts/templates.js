angular.module('user_management.password').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/user_management/password/change.html',
    "<form password-change-form ng-submit=changePassword()></form>"
  );


  $templateCache.put('templates/user_management/password/change_form.html',
    "<div class=form-group ng-if=fields.old_password><label for=old_password ng-if=fields.old_password.label>{{ fields.old_password.label }}</label><input type=password ng-model=data.old_password class=form-control id=old_password></div><div class=form-group><label for=new_password ng-if=fields.new_password.label>{{ fields.new_password.label }}</label><input type=password ng-model=data.new_password class=form-control id=new_password></div><div class=form-group><label for=new_password2 ng-if=fields.new_password2.label>{{ fields.new_password2.label }}</label><input type=password ng-model=data.new_password2 class=form-control id=new_password2></div><button type=submit class=\"btn btn-default\">Update password</button>"
  );


  $templateCache.put('templates/user_management/password/reset_request.html',
    "<form password-reset-request-form ng-submit=resetPassword()></form>"
  );


  $templateCache.put('templates/user_management/password/reset_request_form.html',
    "<div class=form-group><label for=email ng-if=fields.email.label>{{ fields.email.label }}</label><input type=email ng-model=data.email class=form-control id=email autofocus></div><button type=submit class=\"btn btn-default\">Reset password</button>"
  );

}]);