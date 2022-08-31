import {Agenda} from "agenda";
import {connect} from 'mongoose';

const agenda = new Agenda();
const dsn = 'mongodb+srv://...';

(async function () {
    const mongoose = await connect(dsn);

    agenda.mongo(mongoose.connections[0].db); // src/index.ts(10,18): error TS2345: Argument of type
    agenda.on('ready', async () => console.log('success'));
})();
