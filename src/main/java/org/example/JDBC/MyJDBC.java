package org.example.JDBC;

import org.example.JDBC.DataStorage;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;


public class MyJDBC {
    public static void main(String[] args) {
        try{
            // Establish a connection to the MySQL database
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/r_estate_test", "root", "pw");

            // Create a statement object for executing SQL queries
            Statement statement = connection.createStatement();

            // Execute a SQL query to select all data from the "apartment" table
            ResultSet resultSet = statement.executeQuery("SELECT * FROM appartment_test");

            // Create a org.example.JDBC.DataStorage object to store the extracted data
            DataStorage dataStorage = new DataStorage();

            // Extract data from the ResultSet and store it in the DataStorage object
            dataStorage.extractData(resultSet);

            // Retrieve the extracted data from the DataStorage object
            ArrayList<String> ids = dataStorage.getIds();
            ArrayList<String> street = dataStorage.getStreets();
            ArrayList<String> number = dataStorage.getNumbers();
            ArrayList<String> city = dataStorage.getCities();
            ArrayList<String> city_code = dataStorage.getCity_codes();

            // Iterate over the retrieved data and print it
            for(int i = 0; i<ids.size(); i++){
                System.out.println("ID: " + ids.get(i) + ", Street: " + street.get(i) + ", Number: " + number.get(i) + ", City: " + city.get(i) + ", City Code: " + city_code.get(i));
            }

        } catch(Exception e){
            e.printStackTrace();
        }
    }
}
