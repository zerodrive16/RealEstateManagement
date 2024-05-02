package org.example.JDBC;

import java.sql.ResultSet;
import java.util.ArrayList;

public class DataStorage {
    // ArrayLists to store IDs and addresses extracted from the ResultSet
    private ArrayList<String> ids = new ArrayList<>();
    private ArrayList<String> streets = new ArrayList<>();
    private ArrayList<String> numbers = new ArrayList<>();
    private ArrayList<String> cities = new ArrayList<>();
    private ArrayList<String> city_codes = new ArrayList<>();




    // Method to extract data from the ResultSet and store it in the ArrayLists
    public void extractData(ResultSet resultSet) {
        try {
            // Loop through the ResultSet
            while(resultSet.next()) {
                String id = resultSet.getString("id");
                String address = resultSet.getString("street");
                String number = resultSet.getString("number");
                String city = resultSet.getString("city");
                String city_code = resultSet.getString("city_code");
                ids.add(id);
                streets.add(address);
                numbers.add(number);
                cities.add(city);
                city_codes.add(city_code);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Method to retrieve the ArrayList of IDs
    public ArrayList<String> getIds() {
        return ids;
    }

    // Method to retrieve the ArrayList of addresses
    public ArrayList<String> getStreets() {
        return streets;
    }
    public ArrayList<String> getNumbers() {
        return numbers;
    }
    public ArrayList<String> getCities() {
        return cities;
    }
    public ArrayList<String> getCity_codes() {
        return city_codes;
    }
}
