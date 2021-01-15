INSERT INTO site_user (email,hash)
VALUES($1,$2)

-- TEST data - (user_name,first_name,last_name,email,hash)

-- below it dummy data
-- INSERT INTO site_user (user_name,first_name,last_name,email)
-- VALUES (
--     'cdawg',
--     'Chris',
--     'deMontigny',
--     'cd@email.com'
-- )