/* eslint-disable camelcase */
export const STATE_REDUCER_KEY = "user";

export const EVENT_TITLES = {
    loggedIn_session: "Logged In",
    course_visited: "Course Visited",
    progress_update: "Progress Update",
    session_duration: "Session Duration"
};

export const INVOICE_DATA = {
    "invoiceNumber": "INV-001",
    "date": "2024-08-04",
    "invoiceTo": "John Doe",
    "place": "NY",
    "mobile": "1234567890",
    "email": "johndoe@example.com",
    "state": "California",
    "code": "CA123",
    "items": [
        {
            "slNo": 1,
            "itemName": "Item 1",
            "gst": "18%",
            "hsnNo": "HSN001",
            "qty": 10,
            "rate": 100,
            "amount": 1000
        },
        {
            "slNo": 2,
            "itemName": "Item 2",
            "gst": "18%",
            "hsnNo": "HSN002",
            "qty": 5,
            "rate": 200,
            "amount": 1000
        }
    ]
}
