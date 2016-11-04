function tickets(ticketDescr,sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

            static sorting(ticket,sortCriteria) {
                switch (sortCriteria){
                    case 'destination':
                        return ticket.sort((ticket1,ticket2)=>ticket1.destination.localeCompare(ticket2.destination));
                    case 'price':
                        return ticket.sort((ticket1,ticket2)=>ticket1.price-ticket2.price);
                    case 'status':
                        return ticket.sort((ticket1,ticket2) => ticket1.status.localeCompare(ticket2.status));
                }
            }
        }
        return Ticket.sorting(ticketDescr.map(ticketDescr=>{ticketDescr
        = ticketDescr.split(/\|/);
        return new Ticket(ticketDescr[0],Number(ticketDescr[1]),ticketDescr[2]);}),sortCriteria);
    }
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));

