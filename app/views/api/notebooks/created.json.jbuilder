json.notebook do
  json.partial! "api/notebooks/notebook", notebook: @notebook
end

json.success ["New notebook saved!"]
