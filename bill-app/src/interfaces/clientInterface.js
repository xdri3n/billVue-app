const date = new Date().toLocaleDateString('fr-FR', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
})

export default {
  id: -1,
  firstName: '',
  lastName: '',
  dateAdded: date,
  role: '',
  phone: '',
  email: '',
  company: '',
  adresse1: '',
  adresse2: '',
  zipCode: '',
  city: '',
  country: ''
}
