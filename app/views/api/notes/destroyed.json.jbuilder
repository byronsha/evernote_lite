json.note do
  json.partial! "api/notes/note", note: @note
end

json.latest_note do
  json.partial! "api/notes/note", note: @latest_note
end

json.success ["Your note was deleted!"]
