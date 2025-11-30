Query 1:

<img width="2848" height="662" alt="image" src="https://github.com/user-attachments/assets/453b95a6-52c2-4fa1-92f3-9095ac859f46" />


Query 2:

<img width="2071" height="629" alt="image" src="https://github.com/user-attachments/assets/d7c270ef-aacb-4115-919a-2dca340ddc3e" />


Query 3:

<img width="2849" height="513" alt="image" src="https://github.com/user-attachments/assets/c57f18fd-2fa7-42eb-8de3-f2a59f44764f" />


Query 4:

<img width="2845" height="513" alt="image" src="https://github.com/user-attachments/assets/3c446e1f-3827-49eb-9055-79ee85056c1d" />


Query 5:


  1)
  <img width="2862" height="992" alt="Screenshot 2025-11-30 225647" src="https://github.com/user-attachments/assets/1bf4bf56-abda-4acb-b317-989c95b96330" />

  2) 
  <img width="1359" height="168" alt="image" src="https://github.com/user-attachments/assets/bfa74645-ba78-4ab1-897c-c51ff02229f1" />

  3) 
  <img width="2846" height="984" alt="image" src="https://github.com/user-attachments/assets/3525e7c9-6073-482d-ad05-96eb870e9520" />

  4) The index improved performance because MySQL no longer had to scan the entire content table for each category during the JOIN. Instead, it used the index to quickly locate matching rows, reducing lookup time significantly. As a result, the overall query execution became faster, especially noticeable as the dataset grows.
    
  #1) Foreign keys ensure tables are properly linked and keep relationships consistent. They also protect the database from invalid entries by requiring every category_id in the content table to match an existing category.
  
  #2) ACID is important because it ensures that multiple users updating the view count at the same time do not corrupt or lose data. Without ACID, simultaneous updates could overwrite each other, leading to inaccurate or inconsistent view counts in the database.
  
  #3) Creating an index on category_id speeds up searches by letting MySQL jump directly to matching rows. This greatly improves homepage performance, since it relies on many queries that filter content by category.
   
