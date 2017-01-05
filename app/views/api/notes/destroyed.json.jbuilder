json.note do
  json.partial! "api/notes/note", note: @note
end

json.success ["Your note was deleted!"]
