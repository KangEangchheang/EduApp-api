import { AutoIncrement, Column, Model, Table } from "sequelize-typescript";

@Table
export class BaseModel<T> extends Model<T> {
    @AutoIncrement
    @Column({ primaryKey: true, unique: true })
    id?: string;



    /**
     * * the postgres database will auto create this column for us incase they didnt you can uncomment this
     */
    // @Column({ defaultValue: new Date() })
    // createdAt?: Date;

    // @Column({ defaultValue: new Date() })
    // updatedAt?: Date;
}