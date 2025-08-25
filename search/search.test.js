function linearSearch(id, array) {}

function binarySearch(id, array) {}

test.skip("linear search", function () {
  const lookingFor = { id: 5, name: "Giorgi" };
  expect(
    linearSearch(5, [
      { id: 1, name: "Sandro" },
      { id: 11, name: "Salome" },
      { id: 21, name: "Irakli" },
      { id: 10, name: "Beka" },
      { id: 13, name: "Sopo" },
      { id: 31, name: "Ani" },
      { id: 6, name: "Nino" },
      { id: 19, name: "Mariam" },
      { id: 25, name: "Kakha" },
      { id: 18, name: "Jemali" },
      { id: 2, name: "Malkhaz" },
      { id: 51, name: "Khatia" },
      lookingFor,
      { id: 14, name: "Besarion" },
    ])
  ).toBe(lookingFor);
});

test.skip("binary search", function () {
  const lookingFor = { id: 23, name: "Bidzina" };
  expect(
    binarySearch(23, [
      { id: 1, name: "Sandro" },
      { id: 3, name: "Salome" },
      { id: 5, name: "Irakli" },
      { id: 6, name: "Beka" },
      { id: 10, name: "Sopo" },
      { id: 12, name: "Ani" },
      { id: 13, name: "Nino" },
      { id: 15, name: "Mariam" },
      { id: 17, name: "Kakha" },
      { id: 18, name: "Jemali" },
      { id: 19, name: "Malkhaz" },
      { id: 21, name: "Khatia" },
      lookingFor,
      { id: 24, name: "Besarion" },
    ])
  ).toBe(lookingFor);
});
