class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :notebook_id, null: false
      t.string :title, null: false
      t.text :content, null: false
      t.string :image_url
      t.timestamps null: false
    end
  end
end
