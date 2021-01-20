SELECT * FROM orders o
JOIN products p ON p.product_id = o.product_id
JOIN site_user su ON o.user_id = su.user_id