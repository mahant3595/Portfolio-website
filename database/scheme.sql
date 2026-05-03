CREATE DATABASE portfolio;
USE portfolio;

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT
);

INSERT INTO projects (title, description) VALUES
('Portfolio Website', 'My personal portfolio project'),
('Chat App', 'Real-time chat application'),
('E-commerce Site', 'Online shopping website');
