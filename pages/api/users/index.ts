import { createUser, getUsers } from '../../../lib/prisma/user';

const handler = async (request, res) => {
    if (request.method === 'GET') {
        try {
            const { users, error } = await getUsers();
            if (error) throw new Error(error);

            return res.status(200).json({ users });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    if (request.method === 'POST') {
        try {
            const data = request.body;
            const { user, error } = await createUser(data);
            if (error) throw new Error(error);

            return res.status(200).json({ user });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    res.status(425).end(`Method ${request.method} is not allowed.`);
};

export default handler;