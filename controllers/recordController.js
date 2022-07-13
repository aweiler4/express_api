const Records = require('./../models/recordModel')

exports.createRecord = async (request, response) => {
    try {
        const newRecord = await Records.create(request.body);
        response.status(201).json({
            status: 'success',
            data: {
                newRecord,
            },
        });
    } catch {
        response.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};


exports.getIndex = (request, response) => {
    response.send('Index Homepage Hello');
}

exports.getRecord = async (request, response) => {
    try {
        const record = await Records.findById(request.params.id);
        response.status(200).json({
            status: 'success',
            data: {
                record,
            }
        })
    } catch(error) {
        response.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};

exports.deleteRecord = async (request, response) => {
    try {
        await Records.findByIdAndDelete(request.params.id);
        response.status(204).json({
            status: 'success',
            data: {}
        })
    } catch(error) {
        response.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};

exports.updateRecord = async (request, response) => {
    try {
        const updateRecord = await Records.findByIdAndUpdate(request.params.id, request.body, {new: true});
        response.status(200).json({
            status: 'success',
            data: {
                updateRecord,
            }
        })
    } catch(error) {
        response.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};
