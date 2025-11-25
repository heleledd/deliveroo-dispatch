export default function jobPricer(job) {
    const orderValue = job.customer_paid;
    
    // value added tax
    const vat_value = 0.2 * orderValue;

    // based on service charge written in a deliveroo official article
    const service_charge = Math.max(Math.min(0.05 * orderValue, 2), 0.49); 

    // delivery charge is often a lot smaller than what the rider actually gets paid
    // it normally uses some kind of mapping to figure out how long it'd take a rider to get there - not necessarily a 'per mile' estimation
    const delivery_charge = 0.28 * job.distance;

    let commission = 0;
    if (job.big_company) {
        commission = 0.20 * orderValue;
    }
    else {
        commission = 0.30 * orderValue;
    }

    const deliveroo_take = commission + delivery_charge + service_charge;

    // generate random value between 2.90 and 5.00
    const randomBase = +(2.90 + Math.random() * (5 - 2.90)).toFixed(2);

    // ensure riders never earn more than Deliveroo take - 0.20 margin (I made up the margin)
    const rider_earnings = Math.min(randomBase, deliveroo_take - 0.20);

    const deliveroo_earnings = deliveroo_take - rider_earnings;
    const food_business_earnings = orderValue - (vat_value + deliveroo_take);

    let tip_chance = 0.15;
    let tip = 0;
    if (Math.random() < tip_chance) {
        // give a tip between 5-30% of the order value
        tip = Math.max(Math.min(0.30 * orderValue, 2), 0.05); 
    } 

    return { rider_earnings, deliveroo_earnings, food_business_earnings, tip };
}
