CREATE TABLE member(
id SERIAL PRIMARY KEY,
username VARCHAR(15) NOT NULL UNIQUE, 
password VARCHAR(255) NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE trip(
id SERIAL PRIMARY KEY,
title VARCHAR(1000) NOT NULL, 
destination VARCHAR(1000) NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
member_id INT NOT NULL, 
place_id VARCHAR(1000),
locationphotos VARCHAR [],
dates_known  VARCHAR(1000),
FOREIGN KEY (member_id) REFERENCES member(id)
);

CREATE TABLE activity(
id SERIAL PRIMARY KEY,
title VARCHAR(1000) NOT NULL, 
location VARCHAR(1000) NOT NULL,
trip_id INT NOT NULL, 
image_url VARCHAR(1000),
url VARCHAR(1000),
latitude DECIMAL,
longitude DECIMAL,
rating DECIMAL,
review_count INT,
FOREIGN KEY (trip_id) REFERENCES trip(id)
);

