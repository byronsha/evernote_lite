json.extract! note,
  :id,
  :title,
  :content,
  :image_url,
  :created_at,
  :updated_at

json.user do
  json.extract! note.user, :username
end
