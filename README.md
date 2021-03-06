
# typeDB-basic-example
**Basic example to write data into TypeDB.**

Below I will explain to you step by step.

1) **Download and install TypeDB Server from Vaticle. It is available for Windows, Linux, MacOS and Docker.**<br> 
    [Link](https://vaticle.com/download)<br>
    [Link](https://docs.vaticle.com/docs/running-typedb/install-and-run#system-requirements)


2) **Run the TypeDB Server. You can type in your local ip.**

   ```
     ./typedb server --server.address 0.0.0.0:1731   
   ```

   For more informations: 
     ```
      ./typedb server --help
     ```
   If you have installed the server using a package manager, start with:

     ```
       typedb server
     ```

     ```   
       typedb server --help
     ```


3) **Setup the client API. The client API is all the code from here i.e server.ts, test.ts. You can easily clone it from here.**
    **After your clone open another terminal:**

```
    cd graph-example
    npm install
    npm run dev
```

4) **Interim conclusion**<br>
         So far you should have open two different terminals, one terminal where running the server and one
         terminal where running the node.js client server.


5) **Setup a database with the console. Open a third terminal, navigate to the folder where is the TypeDB server and type in.**

 ```
    ./typedb console
    database create test      
 ```


In this project we call the database test, you can see that in the test.ts, test is the database, but you can rename it with whatever you want

 ```
    clear                    // clear console screen
    exit                     // Exit console
 ```

<br>
                 For more informations:<br>

[Link](https://docs.vaticle.com/docs/console/console)
    

6) **Now we have to define a schema**

     ```
        ./typedb console
        transaction test schema write
     ```

    then you will be in the right direction to define the schema. Type in the console after 'transaction test schema write'

      ```
        define
        person sub entity,
        owns age;

        age sub attribute,
        value string;
      ```
      ```
        commit        //dont´t forget the 'commit'
      ```

      ```
        clear
        exit
      ```


7) **Now you are ready to start the application in the browser with**<br> 
         **localhost:8000**<br>
   Make sure, that the TypeDB server still running. In the frontend type in any age, send it and you will see the action **iid** in the client server console. 

   Please remember, use three differnt consoles, otherwise it will not working.
   First console for the server, second for the client server and third for the console.


   
           
      

