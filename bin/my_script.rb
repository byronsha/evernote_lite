require 'addressable/uri'
require 'rest-client'

def create_notebook(user_id, title, description)
  url = Addressable::URI.new(
    scheme: 'http',
    host: 'localhost',
    port: 3000,
    path: '/api/notebooks'
  ).to_s

  puts RestClient.post(
    url,
    { notebook: { user_id: user_id, title: title, description: description } }
  )
end

create_notebook(2, 'My First Note', 'This is a description about my first note.')
