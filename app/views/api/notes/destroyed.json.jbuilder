json.note do
  json.username @note.user.username
end

json.success ["Your note was deleted!"]
