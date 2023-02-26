type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

// 駒の位置を示すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  // パラメータに渡された位置と現在の位置を比較する
  distanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    }
    if (player === 'second') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)), // 後手の段は正負が反対になるため
      }
    }
  }
}

// 駒を表すクラス
abstract class Piece {
  // Pieceクラスとサブクラスからアクセスできる
  protected position: Position

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }

  // メソッドを定義
  // 駒を任意のポジションに移動させるメソッド
  moveTo(position: Position) {
    this.position = position
  }

  // 移動ができるか判定するメソッド
  abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
  // 王将のcanMoveToメソッドを具体的に実装
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance!.suji < 2 && distance!.dan < 2
  }
}

class Fu extends Piece {
  // 歩のcanMoveToメソッド
  // 段に一歩進めるだけでOK
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance!.suji === 0 && distance!.dan === 1
  }
}

class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [new Osho('first', 5, '1'), new Osho('second', 5, '9')]
  }
}
