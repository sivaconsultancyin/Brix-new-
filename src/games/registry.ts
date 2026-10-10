export type GameModule = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export const gameModules: GameModule[] = [
  { id: "aviator", name: "Aviator", icon: "✈", description: "Independent flight-round interface and API module." },
  { id: "roulette", name: "Roulette", icon: "◉", description: "Independent wheel, bets, history and settlement UI module." },
  { id: "teen-patti", name: "Teen Patti", icon: "♠", description: "Independent card-table interface and API module." },
  { id: "dice", name: "Dice", icon: "⚄", description: "Independent dice round interface and API module." },
  { id: "dragon-tiger", name: "Dragon Tiger", icon: "♢", description: "Independent Dragon Tiger table and API module." },
  { id: "andar-bahar", name: "Andar Bahar", icon: "◇", description: "Independent Andar Bahar table and API module." },
];