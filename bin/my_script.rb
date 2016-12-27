require 'addressable/uri'
require 'rest-client'

def create_user(username, email, name, password)
  url = Addressable::URI.new(
    scheme: 'http',
    host: 'localhost',
    port: 3000,
    path: '/api/users.json'
  ).to_s

  puts RestClient.post(
    url,
    { user: { username: username, email: email, name: name, password: password } }
  )
end

create_user('Byron', 'byronysha@gmail.com', 'Byron Sha', 'cheese')
