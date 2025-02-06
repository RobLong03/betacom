export interface Persona {
  rc: boolean;
  msg: string | null;
  dati: {
    [key: string]: {
      id: number;
      nome: string;
      cognome: string;
      email: string;
      colore: string;
      isOnline: boolean;
    };
  };
}
