# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT productname, categoryname
FROM products p
JOIN categories c ON p.categoryid = c.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT orderid, shippername
FROM orders o
JOIN shippers s ON o.shipperid = s.shipperid
WHERE orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT productname, quantity
FROM orderdetails o
JOIN products p ON p.productid = o.productid
WHERE orderid = 10251
ORDER BY productname

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT orderid, customername, lastname as EmployeeLastName
FROM orders o
JOIN customers c ON c.customerid = o.customerid
JOIN employees e ON e.employeeid = o.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT categoryname, count(categoryname) as Count
FROM products p
JOIN categories c ON c.categoryid = p.categoryid
GROUP BY categoryname

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT orderid, count(o.productid) as ItemCount
FROM orderdetails o
JOIN products p ON o.productid = p.productid
GROUP BY orderid