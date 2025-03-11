---
title: "GitHub - niklasf/python-chess: A chess library for Python, with move generation and validation, PGN parsing and writing, Polyglot opening book reading, Gaviota tablebase probing, Syzygy tablebase probing, and UCI/XBoard engine communication"
source: "https://github.com/niklasf/python-chess"
author:
  - "[[GitHub]]"
published:
created: 2025-02-14
description: "A chess library for Python, with move generation and validation, PGN parsing and writing, Polyglot opening book reading, Gaviota tablebase probing, Syzygy tablebase probing, and UCI/XBoard engine communication - niklasf/python-chess"
tags:
  - "clippings"
---
## python-chess: a chess library for Python

 [![Test status](https://github.com/niklasf/python-chess/workflows/Test/badge.svg)](https://github.com/niklasf/python-chess/actions)[![PyPI package](https://camo.githubusercontent.com/3efe0ab49caf4127d0d4cac5fccb095d0f5a731933ea719e02a57dd742cc5910/68747470733a2f2f62616467652e667572792e696f2f70792f63686573732e737667) ](https://pypi.python.org/pypi/chess)[![Docs](https://camo.githubusercontent.com/b262be6f55918fd8ff3eb756cdbe5782cc3f5b9e084119efb4440631fd7e08e6/68747470733a2f2f72656164746865646f63732e6f72672f70726f6a656374732f707974686f6e2d63686573732f62616467652f3f76657273696f6e3d6c6174657374)](https://python-chess.readthedocs.io/en/latest/) [![Chat on Gitter](https://camo.githubusercontent.com/4f1170c018426ec8c8c1812795ac34d09bcd478fdab916d9290f266dea30ca5c/68747470733a2f2f6261646765732e6769747465722e696d2f707974686f6e2d63686573732f636f6d6d756e6974792e737667)](https://gitter.im/python-chess/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Introduction

python-chess is a chess library for Python, with move generation, move validation, and support for common formats. This is the Scholar's mate in python-chess:

```
>>> import chess

>>> board = chess.Board()

>>> board.legal_moves  # doctest: +ELLIPSIS
<LegalMoveGenerator at ... (Nh3, Nf3, Nc3, Na3, h3, g3, f3, e3, d3, c3, ...)>
>>> chess.Move.from_uci("a8a1") in board.legal_moves
False

>>> board.push_san("e4")
Move.from_uci('e2e4')
>>> board.push_san("e5")
Move.from_uci('e7e5')
>>> board.push_san("Qh5")
Move.from_uci('d1h5')
>>> board.push_san("Nc6")
Move.from_uci('b8c6')
>>> board.push_san("Bc4")
Move.from_uci('f1c4')
>>> board.push_san("Nf6")
Move.from_uci('g8f6')
>>> board.push_san("Qxf7")
Move.from_uci('h5f7')

>>> board.is_checkmate()
True

>>> board
Board('r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4')
```

## Installing

Requires Python 3.8+. Download and install the latest release:

```
pip install chess
```

## [Documentation](https://python-chess.readthedocs.io/en/latest/)

- [Core](https://python-chess.readthedocs.io/en/latest/core.html)
- [PGN parsing and writing](https://python-chess.readthedocs.io/en/latest/pgn.html)
- [Polyglot opening book reading](https://python-chess.readthedocs.io/en/latest/polyglot.html)
- [Gaviota endgame tablebase probing](https://python-chess.readthedocs.io/en/latest/gaviota.html)
- [Syzygy endgame tablebase probing](https://python-chess.readthedocs.io/en/latest/syzygy.html)
- [UCI/XBoard engine communication](https://python-chess.readthedocs.io/en/latest/engine.html)
- [Variants](https://python-chess.readthedocs.io/en/latest/variant.html)
- [Changelog](https://python-chess.readthedocs.io/en/latest/changelog.html)

## Features

- Includes mypy typings.
- IPython/Jupyter Notebook integration. [SVG rendering docs](https://python-chess.readthedocs.io/en/latest/svg.html).

```
>>> board  # doctest: +SKIP
```

[![r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR](https://camo.githubusercontent.com/38540e265454f7b82a3cc2697e7ce77e698a7cd4e5aca14fb99b2fb92fe333c7/68747470733a2f2f6261636b73636174746572696e672e64652f7765622d626f617264696d6167652f626f6172642e706e673f66656e3d723162716b6231722f70707070315170702f326e326e322f3470332f32423150332f382f50505050315050502f524e42314b314e52266c6173746d6f76653d6835663726636865636b3d6538)](https://camo.githubusercontent.com/38540e265454f7b82a3cc2697e7ce77e698a7cd4e5aca14fb99b2fb92fe333c7/68747470733a2f2f6261636b73636174746572696e672e64652f7765622d626f617264696d6167652f626f6172642e706e673f66656e3d723162716b6231722f70707070315170702f326e326e322f3470332f32423150332f382f50505050315050502f524e42314b314e52266c6173746d6f76653d6835663726636865636b3d6538)
- Chess variants: Standard, Chess960, Suicide, Giveaway, Atomic, King of the Hill, Racing Kings, Horde, Three-check, Crazyhouse. [Variant docs](https://python-chess.readthedocs.io/en/latest/variant.html).
- Make and unmake moves.

```
>>> Nf3 = chess.Move.from_uci("g1f3")
>>> board.push(Nf3)  # Make the move

>>> board.pop()  # Unmake the last move
Move.from_uci('g1f3')
```
- Show a simple ASCII board.

```
>>> board = chess.Board("r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4")
>>> print(board)
r . b q k b . r
p p p p . Q p p
. . n . . n . .
. . . . p . . .
. . B . P . . .
. . . . . . . .
P P P P . P P P
R N B . K . N R
```
- Detects checkmates, stalemates and draws by insufficient material.

```
>>> board.is_stalemate()
False
>>> board.is_insufficient_material()
False
>>> board.outcome()
Outcome(termination=<Termination.CHECKMATE: 1>, winner=True)
```
- Detects repetitions. Has a half-move clock.

```
>>> board.can_claim_threefold_repetition()
False
>>> board.halfmove_clock
0
>>> board.can_claim_fifty_moves()
False
>>> board.can_claim_draw()
False
```

With the new rules from July 2014, a game ends as a draw (even without a claim) once a fivefold repetition occurs or if there are 75 moves without a pawn push or capture. Other ways of ending a game take precedence.

```
>>> board.is_fivefold_repetition()
False
>>> board.is_seventyfive_moves()
False
```
- Detects checks and attacks.

```
>>> board.is_check()
True
>>> board.is_attacked_by(chess.WHITE, chess.E8)
True

>>> attackers = board.attackers(chess.WHITE, chess.F3)
>>> attackers
SquareSet(0x0000_0000_0000_4040)
>>> chess.G2 in attackers
True
>>> print(attackers)
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . 1 .
. . . . . . 1 .
```
- Parses and creates SAN representation of moves.

```
>>> board = chess.Board()
>>> board.san(chess.Move(chess.E2, chess.E4))
'e4'
>>> board.parse_san('Nf3')
Move.from_uci('g1f3')
>>> board.variation_san([chess.Move.from_uci(m) for m in ["e2e4", "e7e5", "g1f3"]])
'1. e4 e5 2. Nf3'
```
- Parses and creates FENs, extended FENs and Shredder FENs.

```
>>> board.fen()
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
>>> board.shredder_fen()
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w HAha - 0 1'
>>> board = chess.Board("8/8/8/2k5/4K3/8/8/8 w - - 4 45")
>>> board.piece_at(chess.C5)
Piece.from_symbol('k')
```
- Parses and creates EPDs.

```
>>> board = chess.Board()
>>> board.epd(bm=board.parse_uci("d2d4"))
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - bm d4;'

>>> ops = board.set_epd("1k1r4/pp1b1R2/3q2pp/4p3/2B5/4Q3/PPP2B2/2K5 b - - bm Qd1+; id \"BK.01\";")
>>> ops == {'bm': [chess.Move.from_uci('d6d1')], 'id': 'BK.01'}
True
```
- Detects [absolute pins and their directions](https://python-chess.readthedocs.io/en/latest/core.html#chess.Board.pin).
- Reads Polyglot opening books. [Docs](https://python-chess.readthedocs.io/en/latest/polyglot.html).

```
>>> import chess.polyglot

>>> book = chess.polyglot.open_reader("data/polyglot/performance.bin")

>>> board = chess.Board()
>>> main_entry = book.find(board)
>>> main_entry.move
Move.from_uci('e2e4')
>>> main_entry.weight
1

>>> book.close()
```
- Reads and writes PGNs. Supports headers, comments, NAGs and a tree of variations. [Docs](https://python-chess.readthedocs.io/en/latest/pgn.html).

```
>>> import chess.pgn

>>> with open("data/pgn/molinari-bordais-1979.pgn") as pgn:
...     first_game = chess.pgn.read_game(pgn)

>>> first_game.headers["White"]
'Molinari'
>>> first_game.headers["Black"]
'Bordais'

>>> first_game.mainline()  # doctest: +ELLIPSIS
<Mainline at ... (1. e4 c5 2. c4 Nc6 3. Ne2 Nf6 4. Nbc3 Nb4 5. g3 Nd3#)>

>>> first_game.headers["Result"]
'0-1'
```
- Probe Gaviota endgame tablebases (DTM, WDL). [Docs](https://python-chess.readthedocs.io/en/latest/gaviota.html).
- Probe Syzygy endgame tablebases (DTZ, WDL). [Docs](https://python-chess.readthedocs.io/en/latest/syzygy.html).

```
>>> import chess.syzygy

>>> tablebase = chess.syzygy.open_tablebase("data/syzygy/regular")

>>> # Black to move is losing in 53 half moves (distance to zero) in this
>>> # KNBvK endgame.
>>> board = chess.Board("8/2K5/4B3/3N4/8/8/4k3/8 b - - 0 1")
>>> tablebase.probe_dtz(board)
-53

>>> tablebase.close()
```
- Communicate with UCI/XBoard engines. Based on `asyncio`. [Docs](https://python-chess.readthedocs.io/en/latest/engine.html).

```
>>> import chess.engine

>>> engine = chess.engine.SimpleEngine.popen_uci("stockfish")

>>> board = chess.Board("1k1r4/pp1b1R2/3q2pp/4p3/2B5/4Q3/PPP2B2/2K5 b - - 0 1")
>>> limit = chess.engine.Limit(time=2.0)
>>> engine.play(board, limit)  # doctest: +ELLIPSIS
<PlayResult at ... (move=d6d1, ponder=c1d1, info={...}, draw_offered=False, resigned=False)>

>>> engine.quit()
```

## Selected projects

If you like, share interesting things you are using python-chess for, for example:

| [![https://github.com/niklasf/python-chess/blob/master/docs/images/syzygy.png?raw=true](https://github.com/niklasf/python-chess/raw/master/docs/images/syzygy.png?raw=true)](https://syzygy-tables.info/) | [https://syzygy-tables.info/](https://syzygy-tables.info/)  A website to probe Syzygy endgame tablebases |
| --- | --- |
| [![https://github.com/niklasf/python-chess/blob/master/docs/images/maia.png?raw=true](https://github.com/niklasf/python-chess/raw/master/docs/images/maia.png?raw=true)](https://maiachess.com/) | [https://maiachess.com/](https://maiachess.com/)  A human-like neural network chess engine |
| [![https://github.com/niklasf/python-chess/blob/master/docs/images/clente-chess.png?raw=true](https://github.com/niklasf/python-chess/raw/master/docs/images/clente-chess.png?raw=true)](https://github.com/clente/chess) | [clente/chess](https://github.com/clente/chess)  Oppinionated wrapper to use python-chess from the R programming language |
| [![https://github.com/niklasf/python-chess/blob/master/docs/images/crazyara.png?raw=true](https://github.com/niklasf/python-chess/raw/master/docs/images/crazyara.png?raw=true)](https://crazyara.org/) | [https://crazyara.org/](https://crazyara.org/)  Deep learning for Crazyhouse |
| [![https://github.com/niklasf/python-chess/blob/master/docs/images/jcchess.png?raw=true](https://github.com/niklasf/python-chess/raw/master/docs/images/jcchess.png?raw=true)](http://johncheetham.com/projects/jcchess/) | [http://johncheetham.com](http://johncheetham.com/projects/jcchess/)  A GUI to play against UCI chess engines |
| [![https://github.com/niklasf/python-chess/blob/master/docs/images/pettingzoo.png?raw=true](https://github.com/niklasf/python-chess/raw/master/docs/images/pettingzoo.png?raw=true)](https://pettingzoo.farama.org/environments/classic/chess/) | [https://pettingzoo.farama.org](https://pettingzoo.farama.org/environments/classic/chess/)  A multi-agent reinforcement learning environment |
| [![https://github.com/niklasf/python-chess/blob/master/docs/images/cli-chess.png?raw=true](https://github.com/niklasf/python-chess/raw/master/docs/images/cli-chess.png?raw=true)](https://github.com/trevorbayless/cli-chess) | [cli-chess](https://github.com/trevorbayless/cli-chess)  A highly customizable way to play chess in your terminal |

- extensions to build engines (search and evaluation) – [https://github.com/Mk-Chan/python-chess-engine-extensions](https://github.com/Mk-Chan/python-chess-engine-extensions)
- a stand-alone chess computer based on DGT board – [https://picochess.com/](https://picochess.com/)
- a bridge between Lichess API and chess engines – [https://github.com/lichess-bot-devs/lichess-bot](https://github.com/lichess-bot-devs/lichess-bot)
- a command-line PGN annotator – [https://github.com/rpdelaney/python-chess-annotator](https://github.com/rpdelaney/python-chess-annotator)
- an HTTP microservice to render board images – [https://github.com/niklasf/web-boardimage](https://github.com/niklasf/web-boardimage)
- building a toy chess engine with alpha-beta pruning, piece-square tables, and move ordering – [https://healeycodes.com/building-my-own-chess-engine/](https://healeycodes.com/building-my-own-chess-engine/)
- a JIT compiled chess engine – [https://github.com/SamRagusa/Batch-First](https://github.com/SamRagusa/Batch-First)
- teaching Cognitive Science – [https://jupyter.brynmawr.edu](https://jupyter.brynmawr.edu/services/public/dblank/CS371%20Cognitive%20Science/2016-Fall/Programming%20a%20Chess%20Player.ipynb)
- an [Alexa skill to play blindfold chess](https://www.amazon.com/Laynr-blindfold-chess/dp/B0859QF8YL) – [https://github.com/laynr/blindfold-chess](https://github.com/laynr/blindfold-chess)
- a chessboard widget for PySide2 – [https://github.com/H-a-y-k/hichesslib](https://github.com/H-a-y-k/hichesslib)
- Django Rest Framework API for multiplayer chess – [https://github.com/WorkShoft/capablanca-api](https://github.com/WorkShoft/capablanca-api)
- a [browser based PGN viewer](https://about.nmstoker.com/chess2.html) written in PyScript – [https://github.com/nmstoker/ChessMatchViewer](https://github.com/nmstoker/ChessMatchViewer)
- an accessible chessboard that allows blind and visually impaired players to play chess against Stockfish – [https://github.com/blindpandas/chessmart](https://github.com/blindpandas/chessmart)
- a web-based chess vision exercise – [https://github.com/3d12/rookognition](https://github.com/3d12/rookognition)

## Prior art

Thanks to the Stockfish authors and thanks to Sam Tannous for publishing his approach to [avoid rotated bitboards with direct lookup (PDF)](http://arxiv.org/pdf/0704.3773.pdf) alongside his GPL2+ engine [Shatranj](https://github.com/stannous/shatranj). Some move generation ideas are taken from these sources.

Thanks to Ronald de Man for his [Syzygy endgame tablebases](https://github.com/syzygy1/tb). The probing code in python-chess is very directly ported from his C probing code.

Thanks to [Kristian Glass](https://github.com/doismellburning) for transferring the namespace `chess` on PyPI.

## License

python-chess is licensed under the GPL 3 (or any later version at your option). Check out `LICENSE.txt` for the full text.