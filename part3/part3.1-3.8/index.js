const express = require("express");
const app = express()
const morgan = require("morgan");
app.use(express.json())
// Configure morgan to log body of POST request
morgan.token("person", (req, res) => {
  if (req.method === "POST") return JSON.stringify(req.body);
  return null;
});
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :person"
  )
);

let persons =
[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
app.get('/info', (request, response) => {
    const info = {
        entries: persons.length,
        date: new Date()
    }
    response.send(`<div>
    Phonebook has info for ${info.entries} people <br>
    ${info.date}
    </div>`
    )
})
app.get('/api/persons/:id',(request,response) => {
    const id = Number(request.params.id)
    const person = persons.find(person =>{
        return person.id === id
    })
    if(person){
        response.json(person)
    }else{
        response.status(404).end()
    }
})
app.delete('/api/persons/:id', (request, response) =>{
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id != id)
    response.status(204).end()
}) 
const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }
app.post('/api/persons',(request,response) =>{
    const body = request.body
    const alreadyexist = persons.some(person =>person.name === body.name)
    if(!body.name || !body.number) {
        return response.status(400).json({
            error:'name or number is missing'
        })
    }
    if(alreadyexist){   
        return response.status(400).json({
        error:'name must be unique'
    })

    }
    const person = {
        name: body.name,
        number: body.number,
        date: new Date(),
        id:generateId(),
    }
    persons = persons.concat(person)
    response.json(person)
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})