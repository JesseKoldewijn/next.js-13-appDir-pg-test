import { NextResponse } from "next/server";
import { Client } from "pg";
import { parse } from "pg-connection-string";

const config = parse(
	"postgresql://jdmtvystlusnhamvdfktojia%40psql-mock-database-cloud:dfzzfarloqabulssnomiiycj@psql-mock-database-cloud.postgres.database.azure.com:5432/tasks1680766307350wlfnaccdfskjfvpz"
);

export async function GET() {
	try {
		// ! Don't worry, its a mock db
		const client = new Client({
			user: config.user,
			host: String(config.host),
			database: String(config.database),
			password: String(config.password),
			port: 5432,
		});
		await client.connect();
		const res = await client.query("SELECT * FROM tasks");
		//console.log(res);
		await client.end();
		return NextResponse.json({ pgObj: res });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ msg: error, conf: config });
	}
}
