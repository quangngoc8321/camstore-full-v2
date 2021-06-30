const Order = require("../models/Order");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.getMyOrders =  async (req,res) => {
    try {
        const {_id: uid} = req.user;
        const {pageNumber = 1} = req.query;
        const total = await Order.countDocuments({uid});
        const pageSize = 8;
        const skip = (pageNumber - 1) * pageSize;
        const sort =  { createdAt: -1 };

        const myOrders =  await Order.find({uid})
        .skip(skip)
        .limit(pageSize)
        .sort(sort);;
        res.status(200).json({
            success: true,
            total,
            myOrders,
            pageSize
        })
    } catch (error) {
        console.log(error);
    }
}
exports.getCustomerOrders =  async (req,res) => {
        try {
            const {pageNumber = 1} = req.query;
            const total = await Order.countDocuments({isPaid: true});
            const pageSize = 8;
            const skip = (pageNumber - 1) * pageSize;
            const sort =  { createdAt: -1 };

            const customerOrders = await Order.find({isPaid: true})
            .skip(skip)
            .limit(pageSize)
            .sort(sort);

            res.status(200).json({
                success: true,
                total,
                customerOrders,
                pageSize,
            });
           
        } catch (error) {
            console.log(error);
        }
    }
    exports.createOrder =  async (req,res,next) => {
        try {
                const { orderItems, shippingDetails } = req.body;
                const { _id: uid } = req.user;
                req.body.uid = uid;

                const order = await Order.create(req.body);
                const line_items = orderItems.map((item) => {
                return {
                    price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.product.name,
                        images: [item.product.image.url],
                    },
                    unit_amount: item.product.price * 100,
                    },
                    quantity: item.quantity,
                    };
                });
                req.line_items = line_items;
                req.customer_email = shippingDetails.email;
                req.metadata = {order_id: `${order._id}`};
                next()
        } catch (error) {
            next(error)
        }
    }
    exports.createCheckOutSession =  async (req,res,next) => {
        try {
            const {metadata, line_items, customer_email} = req;
            const session = await stripe.checkout.sessions.create({
                customer_email,
                payment_method_types: ["card"],
                metadata,
                line_items,
                mode: "payment",
                success_url: "https://onlinecamstore.herokuapp.com/my-orders",
                cancel_url: "https://onlinecamstore.herokuapp.com/my-orders",
              });
              res.json({ id: session.id });
        } catch (error) {
            console.log(error);
        }
    }
    exports.getOrder =  async (req,res,next) => {
        try {
            const {orderId} = req.body
            const {_id:uid} = req.user;
            const order = await Order.findOne({uid, _id: orderId});
            if(!order) {
                return res.status(400).json({
                    success: false,
                    message: "Unauthorized"
                })
            }
            const {orderItems, shippingDetails} = order;
            const line_items = orderItems.map((item) => {
                return {
                    price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.product.name,
                        images: [item.product.image.url],
                    },
                    unit_amount: item.product.price * 100,
                    },
                    quantity: item.quantity,
                    };
                });
                req.line_items = line_items;
                req.metadata = {order_id: `${order._id}`};
                req.customer_email = shippingDetails.email;
                next()
        } catch (error) {
            console.log(error);
        }
    }

    exports.updateOrder =  async (req,res,next) => {
        try {
            const sig = req.headers["stripe-signature"];
            let event = stripe.webhooks.constructEvent(
                req.body,
                  sig,
                  process.env.STRIPE_ENDPOINT_SECRET
                );
                if (event.type === "checkout.session.completed") {
                  const session = event.data.object;
                  const { order_id } = session.metadata;
                  await Order.findByIdAndUpdate(
                    order_id,
                    { isPaid: true },
                    { new: true }
                  );
                }
                res.status(200).json({
                  success: true,
                });
        } catch (error) {
            console.log(error);
        }
    }