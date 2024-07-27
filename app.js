// Flag to track if animation has been triggered
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const sectionPosition = document.getElementById('customer-service-section').offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > sectionPosition - windowHeight / 2) {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        card.style.opacity = '1';
        card.style.animation = `slideIn 0.5s forwards ${index * 0.2}s`;
      });
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Default selected car
    const defaultCar = "Car 1";

    // Car details object
    const carDetails = {
      "Car 1": {
        "Model": "Limousine",
        "Doors": "4",
        "Seats": "5",
        "Luggage": "2 Suitcases / 2 Bags",
        "Transmission": "Automatic",
        "Air conditioning": "Yes",
        "Price": "1000/hr"
      },
      "Car 2": {
        "Model": "car2",
        "Doors": "4",
        "Seats": "5",
        "Luggage": "2 Suitcases / 2 Bags",
        "Transmission": "Automatic",
        "Air conditioning": "Yes",
        "Price": "1000/hr"
      },
      "Car 3": {
        "Model": "car3",
        "Doors": "4",
        "Seats": "5",
        "Luggage": "2 Suitcases / 2 Bags",
        "Transmission": "Automatic",
        "Air conditioning": "Yes",
        "Price": "1000/hr"
      },
      "Car 4": {
        "Model": "Lcar4",
        "Doors": "4",
        "Seats": "5",
        "Luggage": "2 Suitcases / 2 Bags",
        "Transmission": "Automatic",
        "Air conditioning": "Yes",
        "Price": "1000/hr"
      },
      "Car 5": {
        "Model": "car5",
        "Doors": "4",
        "Seats": "5",
        "Luggage": "2 Suitcases / 2 Bags",
        "Transmission": "Automatic",
        "Air conditioning": "Yes",
        "Price": "1000/hr"
      },
      "Car 6": {
        "Model": "car5",
        "Doors": "4",
        "Seats": "5",
        "Luggage": "2 Suitcases / 2 Bags",
        "Transmission": "Automatic",
        "Air conditioning": "Yes",
        "Price": "1000/hr"
      },
      "Car 7": {
        "Model": "car5",
        "Doors": "4",
        "Seats": "5",
        "Luggage": "2 Suitcases / 2 Bags",
        "Transmission": "Automatic",
        "Air conditioning": "Yes",
        "Price": "1000/hr"
      },
      "Car 8": {
        "Model": "car5",
        "Doors": "4",
        "Seats": "5",
        "Luggage": "2 Suitcases / 2 Bags",
        "Transmission": "Automatic",
        "Air conditioning": "Yes",
        "Price": "1000/hr"
      }
    };

    // Function to update car details
    function updateCarDetails(carName) {
      const carDetailsDiv = document.getElementById("car-details");
      carDetailsDiv.innerHTML = ""; // Clear previous content

      const carDetailTable = document.createElement("table");
      carDetailTable.classList.add("table", "car-details-table");

      for (const [key, value] of Object.entries(carDetails[carName])) {
        const row = document.createElement("tr");
        row.innerHTML = `
              <th>${key}</th>
              <td>${value}</td>
          `;
        carDetailTable.appendChild(row);
      }

      carDetailsDiv.appendChild(carDetailTable);
    }

    // Set default car details
    updateCarDetails(defaultCar);

    // Add event listener to car names
    const carNames = document.querySelectorAll(".car-name");
    carNames.forEach(carName => {
      carName.addEventListener("click", function () {
        updateCarDetails(this.textContent);
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const carNames = document.querySelectorAll(".car-name");

    carNames.forEach(carName => {
      carName.addEventListener("click", function () {
        // Remove background color from previously selected car
        const prevSelectedCar = document.querySelector('.car-name.selected');
        if (prevSelectedCar) {
          prevSelectedCar.classList.remove('selected');
        }

        // Add background color to the clicked car
        this.classList.add('selected');
      });
    });
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".scroll-up").style.display = "block";
    } else {
      document.querySelector(".scroll-up").style.display = "none";
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

