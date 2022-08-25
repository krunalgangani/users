module.exports = {

    message: {
        BAD_REQUEST: {
            code: "E_BAD_REQUEST",
            message: "The request cannot be fulfilled due to bad syntax",
            // status: 400,
        },
        CREATED: {
            code: "CREATED",
            message:
                "New record has been created successfully",
            // status: 201,
        },
        DATA_FOUND: {
            code: "DATA_FOUND",
            message: "data founded successfully",
            // status: 200,
        },
        UPDATE: {
            code: "OK",
            message: 'Record updated succefully.',
            // status: 204
        },
        DELETED: {
            code: "OK",
            message: 'Record deleted succefully.',
            // status: 200
        },
    }

}