data = [saveUserInDB, user];



const form = {name: 'David'}
formOrOfferMapper(form);

const user = {
    name: 'Odeyemi',
    email: 'odeyemi@gmail.com',
}

// const users = ['Odeyemi', 'odekyemi@gmail.com']

// users[0]


function formOrOfferMapper(offerOrFormData) {
    const conversionRate = (fo) => {
        const offer = offerOrFormData(fo);
      return (
        (offerOrFormData(fo).visitorsConverted /
          offerOrFormData(fo)?.visitorsExposed) *
        100
      ).toFixed(2);
    };
    const map = (fo) => ({
    ...fo,
    analytics: `Impressions: ${
      offerOrFormData(fo).visitorsExposed ?? "N/A"
    }, ${isForm(fo) ? "Conversions" : "Clicks"}: ${
      offerOrFormData(fo)?.visitorsConverted ?? "N/A"
    }, ${isForm(fo) ? "Conversion" : "Click Thru"} Rate: ${
      conversionRate(fo) === "NaN" ? "0.00" : conversionRate(fo)
    }%`,
  });

  return { map };
}

function formOrOfferMapper() {}

const saveUserInDB = () => {
  // Do logic here
};

// const user = { name: "David" };

saveUserInDB();

const saveUser = function () {};
