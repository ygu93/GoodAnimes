# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161104002033) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "anime_libraries", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "animes", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "synopsis",   null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.string   "image",      null: false
    t.float    "score",      null: false
    t.integer  "episodes",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "media_type"
    t.string   "status"
  end

  create_table "user_animes", force: :cascade do |t|
    t.integer  "user_id",          null: false
    t.integer  "anime_id",         null: false
    t.integer  "anime_library_id", null: false
    t.integer  "user_rating"
    t.date     "user_start_date"
    t.date     "user_end_date"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["anime_id"], name: "index_user_animes_on_anime_id", using: :btree
    t.index ["anime_library_id"], name: "index_user_animes_on_anime_library_id", using: :btree
    t.index ["user_id"], name: "index_user_animes_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
