CREATE DATABASE BANKING_DB;
CREATE TABLE Customer (
  _id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL, 
  last_name VARCHAR(50) NOT NULL, 
  dob DATE NOT NULL ,
  phone  VARCHAR(15) NOT NULL,
  email VARCHAR(100) NOT NULL ,
  address VARCHAR(150) NOT NULL ,
  ghana_card_number VARCHAR(20) NOT NULL,
  account_number VARCHAR(20) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  balance NUMERIC(10, 2) DEFAULT 1000.00,
  total_transactions UUID REFERENCES transactions(transaction_id),
  transaction_date  TIMESTAMPTZ DEFAULT NOW(),
  password VARCHAR(150) NOT NULL 
);
CREATE TABLE transactions (
  transaction_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID DEFAULT uuid_generate_v4() ,
  destination_account  VARCHAR(15) NOT NULL,
  amount NUMERIC(10, 2),
  reference VARCHAR (500),
  timestamp TIMESTAMP
);

CREATE TABLE ADMINISTRATOR (
  _id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name  VARCHAR(50),
    last_name VARCHAR(50),
    role VARCHAR(50),
    password VARCHAR(150),
    word_id VARCHAR(50),
    ssnit_number VARCHAR(50),
    health_insurance_number VARCHAR(20)
);

-- ALTER TABLE transactions ALTER COLUMN user_id TYPE UUID USING user_id::UUID;

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


