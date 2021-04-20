
create database goodworker


create table aspirant (
    id int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(50),
    mobile int(10) NOT NULL,
    email varchar(50) NOT NULL,
    reg_date date NOT NULL,
    city_id int(5),
    `password` varchar(200),
    otp int(6),
    email_verified tinyint,
    mobile_verified tinyint,
    create_date_time timestamp DEFAULT CURRENT_TIMESTAMP,
    update_date_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY id (id),
    KEY mobile (mobile),
    KEY email (email)
)

create table recruiter(
    id int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(50),
    mobile int(10) NOT NULL,
    email varchar(50) NOT NULL,
    reg_date date NOT NULL,
    city_id int(5),
    `password` varchar(200),
    otp int(6),
    email_verified tinyint,
    mobile_verified tinyint,
    create_date_time timestamp DEFAULT CURRENT_TIMESTAMP,
    update_date_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY id (id),
    KEY mobile (mobile),
    KEY email (email)
)
create table jobs (
    id int(11) NOT NULL AUTO_INCREMENT,
    company_id int(11) NOT NULL,
    `desc` text NOT NULL,
    require_skils varchar(200) NOT NULL,
    contact_person_id int(11),
    contact_person_name varchar(10),
    contact_person_mobile int(10), -- can a separate table as there can be multiple contact perosn
    package double NOT NULL,
    recruiter_id int(11),
    city_id tinyint NOT NULL,
    `status` varchar(10),
    current_status varchar(20),
    create_date_time timestamp DEFAULT CURRENT_TIMESTAMP,
    update_date_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY id (id),
    KEY company_id (company_id),
    kEY recruiter_id (recruiter_id),
    KEY `status` (`status`)
)


CREATE TABLE applications (
    id int(11) NOT NULL AUTO_INCREMENT,
    aspirant_id int(11) NOT NULL,
    job_id int(11) NOT NULL,
    applied_on date, 
    current_status varchar(20),
    create_date_time timestamp DEFAULT CURRENT_TIMESTAMP,
    update_date_time timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY id (id),
    KEY aspirant (aspirant),
    kEY job_id (job_id) 

)