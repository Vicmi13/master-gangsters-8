const Ticket = require("../models/Ticket");
const storage = require("../utils/storage");

module.exports = {
  findAll: async (req, res) => {
    try {
      // const allTicket = await Ticket.find();
      const allActiveTickets = await Ticket.find({ is_active: true });
      if (!allActiveTickets.length)
        return res.json({ message: "No Tickets found" });
      return res
        .status(200)
        .json({ message: "All Tickets ", tickets: allActiveTickets });
    } catch (error) {
      return res.status(400).json({
        message: "Error recover Tickets",
        error,
      });
    }
  },

  create: async (req, res) => {
    try {
      const newTicket = await Ticket.create(req.body);
      return res.status(201).json({
        message: "Ticket created ",
        Ticket: newTicket,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Error creating Ticket",
        error,
      });
    }
  },

  findOneById: async (req, res) => {
    const { idTicket } = req.params;

    try {
      const TicketFound = await Ticket.findById(idTicket);
      if (!TicketFound) {
        return res.status(404).json({ message: "Ticket not found" });
      } else {
        return res.status(200).json({
          message: "Ticket found ",
          Ticket: TicketFound,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error Ticket not found",
        error,
      });
    }
  },

  updateOneById: async (req, res) => {
    const id = req.params.idTicket;

    try {
      const TicketUpdated = await Ticket.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).json({
        message: "Ticket updated successfully ",
        Ticket: TicketUpdated,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error update Ticket",
        error,
      });
    }
  },

  deleteById: async (req, res) => {
    const id = req.params.idTicket;

    try {
      const TicketDeleted = await Ticket.findByIdAndDelete(id);
      console.log("Ticket deleted", TicketDeleted);
      return res.status(200).json({
        message: "Ticket deleted successfully ",
        Ticket: TicketDeleted._id,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error delete Ticket",
        error,
      });
    }
  },

  softDeletebyId: async (req, res) => {
    const id = req.params.idTicket;
    try {
      const TicketSoftDeleted = await Ticket.findByIdAndUpdate(
        id,
        { is_active: false },
        { new: true }
      );
      return res.status(200).json({
        message: "Ticket soft deleted successfully ",
        Ticket: TicketSoftDeleted,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error update Ticket",
        error,
      });
    }
  },

  calculateTaxes: async (req, res) => {
    // 1 - Encontrar el ticket by id
    const { idTicket } = req.params;
    console.log("idTicket", idTicket);
    try {
      // 2 - Recuperar items asociados al ticket
      const response = await Ticket.findById(idTicket)
        .populate("items")
        .populate("user");

      // 3 - Hacer operaciones para obtener  total
      const taxPorcentage = 0.1;

      console.log('response', response)
      const subtotal = response.items.reduce((accumulator, item) => {
        console.log("item", item);
        return accumulator + item.price;
      }, 0);

      const totalTaxes = subtotal.toFixed(2) * taxPorcentage;
      const total = subtotal + totalTaxes;
      // console.log("subtotal", subtotal.toFixed(2));
      // console.log("totalTaxes", totalTaxes);
      // console.log("total", total.toFixed(2));

      // 4 - Actualizar subtotal, taxes, total valores en el ticket
      const ticketUpdated = await Ticket.findByIdAndUpdate(
        idTicket,
        { subtotal, total: total.toFixed(2), taxes: totalTaxes.toFixed(2) },
        { new: true }
      );

      // 5 - Regresar ticket actualizado
      return res.status(200).json({
        message: "Ticket with taxes calculated ",
        ticket: ticketUpdated,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error calculate taxes in Ticket",
        error,
      });
    }
  },
};
