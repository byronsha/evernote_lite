json.user do
  json.partial! "api/users/user", user: @user
end

json.success ["Welcome back, #{@user.username}"]
