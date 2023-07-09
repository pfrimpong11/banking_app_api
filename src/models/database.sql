CREATE DATABASE BANKING_DB;
CREATE TABLE Customer (
   _id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, dob DATE NOT NULL , phone  VARCHAR(15) NOT NULL, email VARCHAR(100) NOT NULL , address VARCHAR(150) NOT NULL , ghana_card_number VARCHAR(20) NOT NULL, account_number VARCHAR(20) NOT NULL,password VARCHAR(150) NOT NULL
);
CREATE TABLE AccountDetails (
  account_id SERIAL PRIMARY KEY,
  account_number VARCHAR(20) NOT NULL,
  customer_id INT NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  ghana_card_number VARCHAR(20) NOT NULL,
  phone_number VARCHAR(15) NOT NULL,
  address VARCHAR(150) NOT NULL,
  is_admin BOOLEAN NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  balance DECIMAL(15, 2) NOT NULL,
  account_type VARCHAR(50) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

CREATE TABLE Customers (
  customer_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
