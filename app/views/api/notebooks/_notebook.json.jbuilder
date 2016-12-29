json.extract! notebook,
  :id,
  :title,
  :description,
  :created_at,
  :updated_at

json.user do
  json.extract! notebook.user, :username
end
