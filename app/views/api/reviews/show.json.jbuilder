json.extract! @review, :id,
                      :user_id,
                      :anime_id,
                      :user_rating,
                      :user_start_date,
                      :user_end_date,
                      :body,
                      :updated_at,
                      :user
                      json.created_at @review.created_at.to_date
                  
