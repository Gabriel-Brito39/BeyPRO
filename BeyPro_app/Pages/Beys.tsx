export type BeyX = {
    Id: number;
    NumeroSerie: string;
    Tipo: string; 
    Modelo: string; 
    Blade: string; 
    Ratchet: string; 
    Bit: string; 
    img: string;
};

const beysX: BeyX[] = [
    {
        Id:1, 
        NumeroSerie:"BX-01", 
        Tipo:"https://static.wikia.nocookie.net/beyblade/images/c/cd/Attack_logo_Beyblade_X.png/revision/latest/scale-to-width-down/200?cb=20240905153000", 
        Modelo:"BX", 
        Blade:"DranSword", 
        Ratchet:"3-60", 
        Bit:"F", 
        img:"https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX01_01_list.png"
    },
    {
        Id:2, 
        NumeroSerie:"BX-02", 
        Tipo:"https://static.wikia.nocookie.net/beyblade/images/e/ee/Balance_logo_Beyblade_X.png/revision/latest?cb=20240905153034", 
        Modelo:"BX", 
        Blade:"HellsScythe", 
        Ratchet:"4-60", 
        Bit:"T", 
        img:"https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX02_01_list.png"
    },
    {
        Id:3, 
        NumeroSerie:"BX-03", 
        Tipo:"https://static.wikia.nocookie.net/beyblade/images/3/39/Stamina_logo_Beyblade_X.png/revision/latest?cb=20240905153205", 
        Modelo:"BX", 
        Blade:"WizardArrow", 
        Ratchet:"4-80", 
        Bit:"B", 
        img:"https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX03_01_list.png"
    },
    {
        Id:4, 
        NumeroSerie:"BX-04", 
        Tipo:"https://static.wikia.nocookie.net/beyblade/images/5/5d/Defense_logo_Beyblade_X.png/revision/latest?cb=20240905153118", 
        Modelo:"BX", 
        Blade:"KnightShield", 
        Ratchet:"3-80", 
        Bit:"N", 
        img:"https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX04_01_list.png"
    }
];
export { beysX };