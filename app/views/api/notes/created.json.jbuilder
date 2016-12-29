json.note do
  json.partial! "api/notes/note", note: @note
end

json.success ["New note saved!"]
