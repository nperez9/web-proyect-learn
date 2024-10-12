import psycopg

class UserConnection():
    connection = None

    ## Constructor
    def __init__(self):
        try: 
            self.connection = psycopg.connect('dbname=fast-api user=posgres password=asd123 host=localhost port=5432')
        except psycopg.OperationalError as err:
            print(err)
            self.connection.close()

    ## Destructor
    def __del__(self):
        self.connection.close()

    def get_user(self, user_id):
        cursor = self.connection.cursor()
        cursor.execute('SELECT * FROM users WHERE id = %s', (user_id,))
        return cursor.fetchone()