.card {
    width: 250px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  
  .card-content h3 {
    font-size: 18px;
    font-weight: bold;
  }
  
  .card-content p {
    font-size: 14px;
    color: gray;
  }
  
  .card button {
    margin-top: 10px;
    padding: 8px 12px;
    border: none;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .card button:hover {
    background-color: lightgray;
  }