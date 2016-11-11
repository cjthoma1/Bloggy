class AddSortToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :sort, :int
  end
end
