CREATE TABLE loan (
    address VARCHAR(60) PRIMARY KEY,
    loanid VARCHAR(80) NOT NULL,
    collateral VARCHAR(80) NOT NULL, 
    amount INT NOT NULL, 
    wtoken VARCHAR(80) NOT NULL, 
    wamount INT NOT NULL, 
    interest FLOAT NOT NULL,
    time VARCHAR(20) NOT NULL
);

CREATE TABLE swaps ( 
    address VARCHAR(60) PRIMARY KEY, 
    swapid VARCHAR(80) NOT NULL,
    tokenwanted VARCHAR(80) NOT NULL, 
    amount INT NOT NULL, 
    tokentraded VARCHAR(80) NOT NULL,
    tamount INT NOT NULL
);

CREATE TABLE viral (
    address VARCHAR(60) PRIMARY KEY,
    amount INT NOT NULL
);