class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description
      t.timestamps null: false
    end
  end
end
