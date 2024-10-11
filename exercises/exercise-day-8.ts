// No 1
// class Employee {
//   name: string;
//   hoursWorked: number;

//   constructor(name: string) {
//     this.name = name;
//     this.hoursWorked = 0;
//   }

//   addWorkingHours(hours: number) {
//     this.hoursWorked += hours;
//   }

//   calculateSalary() {}
// }

// class FulltimeEmployee extends Employee {
//   constructor(name: string) {
//     super(name);
//   }

//   calculateSalary() {
//     const baseRate = 100_000;
//     const overtimeRate = 75_000;
//     if (this.hoursWorked <= 6) {
//       return this.hoursWorked * baseRate;
//     } else {
//       return 6 * baseRate + (this.hoursWorked - 6) * overtimeRate;
//     }
//   }
// }

// class ParttimeEmployee extends Employee {
//   constructor(name: string) {
//     super(name);
//   }

//   calculateSalary() {
//     const baseRate = 50000;
//     const overtimeRate = 30000;
//     if (this.hoursWorked <= 7) {
//       return this.hoursWorked * baseRate;
//     } else {
//       return 7 * baseRate + (this.hoursWorked - 7) * overtimeRate;
//     }
//   }
// }

// const fulltimeEmp = new FulltimeEmployee("Udin");
// fulltimeEmp.addWorkingHours(8);
// console.log(
//   `Total gaji ${fulltimeEmp.name}: IDR ${fulltimeEmp.calculateSalary()}`
// );

// const parttimeEmp = new ParttimeEmployee("Eko");
// parttimeEmp.addWorkingHours(9);
// console.log(
//   `Total gaji ${parttimeEmp.name}: IDR ${parttimeEmp.calculateSalary()}`
// );

// cara lain
class Employee {
  name: string;
  gender: string;
  workinghours: number;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
    this.workinghours = 0;
  }

  formatCurrency(price: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }
}

class FulltimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;

  constructor(name: string, gender: string) {
    super(name, gender);
    this.hourlyRate = 100_000;
    this.extraHourlyRate = 75_000;
  }

  addWorkingHours(hour: number) {
    this.workinghours += hour;
  }

  calculateSalary() {
    if (this.workinghours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        hours: this.workinghours,
        totalSalary: this.formatCurrency(this.workinghours * this.hourlyRate),
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workinghours - regularHours;

      return {
        name: this.name,
        gender: this.gender,
        totalSalaryRegular: this.formatCurrency(regularHours * this.hourlyRate),
        totalSalaryExtra: this.formatCurrency(
          extraHours * this.extraHourlyRate
        ),
        total: this.formatCurrency(
          regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
        ),
      };
    }
  }
}

class ParttimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;

  constructor(name: string, gender: string) {
    super(name, gender);
    this.hourlyRate = 50_000;
    this.extraHourlyRate = 30_000;
  }

  addWorkingHours(hour: number) {
    this.workinghours += hour;
  }

  calculateSalary() {
    if (this.workinghours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        hours: this.workinghours,
        totalSalary: this.formatCurrency(this.workinghours * this.hourlyRate),
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workinghours - regularHours;

      return {
        name: this.name,
        gender: this.gender,
        totalSalaryRegular: this.formatCurrency(regularHours * this.hourlyRate),
        totalSalaryExtra: this.formatCurrency(
          extraHours * this.extraHourlyRate
        ),
        total: this.formatCurrency(
          regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
        ),
      };
    }
  }
}

const employee1 = new FulltimeEmployee("Aceng", "cwk");
const employee2 = new FulltimeEmployee("Udin", "cwk");

employee1.addWorkingHours(5);
employee1.addWorkingHours(5);
employee1.addWorkingHours(5);

console.log(employee1.calculateSalary());

employee2.addWorkingHours(5);
employee2.addWorkingHours(5);
console.log(employee2.calculateSalary());

// No 2 ======================================================================================================================
class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string, health: number = 100, power: number = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power: number) {
    this.health -= power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    return `${this.name} -> Health : ${this.health} | Power : ${this.power}`;
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return { health, power };
  }

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      // show status
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      // get random item
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      // use random item
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      // hit player
      this.player2.hit(this.player1.power);
      this.player1.hit(this.player2.power);

      // show status
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
    }

    if (this.player1.health <= 0) {
      return `${this.player2.name} WIN`;
    } else {
      return `${this.player1.name} WIN`;
    }
  }
}

const player1 = new Player("Udin");
const player2 = new Player("Aceng");

const game = new ShootingGame(player1, player2);

console.log(game.start());
