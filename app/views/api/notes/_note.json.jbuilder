json.extract! note,
  :id,
  :notebook_id,
  :title,
  :content,
  :image_url,
  :created_at,
  :updated_at

json.user do
  json.extract! note.user
end

json.notebook do
  json.extract! note.notebook
end
