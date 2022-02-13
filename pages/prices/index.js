import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { makeStyles } from "@material-ui/core/styles"
import LiveChart from "../../components/liveChart"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { GlobalContext } from "../_app"

const coins = [
  {
    id: "BTC-USD",
    name: "Bitcoin",
    description:
      "Bitcoin is an invention that, for the first time in history, enabled a group of software users to create and manage a digital money supply outside the control of any government or bank. A revolutionary idea when introduced in 2009, Bitcoin continues to have implications that are just beginning to be understood and explored by technologists and economists today.",
  },
  {
    id: "ETH-USD",
    name: "Ethereum",
    description:
      "One of the most ambitious blockchain projects, Ethereum (ETH) seeks to use cryptocurrency to decentralize products and services in a wide range of use cases beyond money. If Bitcoin seeks to serve as a digital gold, Ethereum has taken a different approach, generalizing so its users can create any number of custom assets and programs governing their operation.",
  },
  {
    id: "DOGE-USD",
    name: "Doge Coin",
    description:
      "Dogecoin is a cryptocurrency inspired by a popular meme known as Doge, a picture of a Shiba Inu dog accompanied by colorful Comic Sans phrases meant to convey its inner monologue. Launched at the end of 2013, Dogecoin rose to popularity at a time when developers were just beginning to explore the possibilities afforded by Bitcoin’s (BTC) invention.",
  },
  {
    id: "SOL-USD",
    name: "Solana",
    description:
      "Solana is a platform that seeks to provide a foundation for decentralized applications (dapps) in a way that prioritizes scalability. With this aim, Solana is one of several competing blockchain projects such as Ethereum, Zilliqa, or Cardano that hopes to grow an ecosystem of cryptocurrency-powered products and services.",
  },
  {
    id: "DOT-USD",
    name: "Polkadot",
    description:
      "Polkadot is a software that seeks to incentivize a global network of computers to operate a blockchain on top of which users can launch and operate their own blockchains. In this way, Polkadot is one of a number of competing blockchains aiming to grow an ecosystem of cryptocurrencies, other notable examples of which include Ethereum (ETH), Cosmos (ATOM) and EOSIO (EOS). ",
  },
  {
    id: "POLY-USD",
    name: "Polygon",
    description:
      "Polygon, formerly known as the Matic Network, is a scaling solution that aims to provide multiple tools to improve the speed and reduce the cost and complexities of transactions on blockchain networks.",
  },
]
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  buttons: {
    margin: "48px 0",
  },
  title: {
    marginBottom: "36px",
  },
  description: {
    padding: "0 36px",
  },
  bottomMargin: {
    margin: "0 0 84px 0",
  },
}))

function App() {
  const { navTransparency } = React.useContext(GlobalContext)
  const [navTransparent, setNavTransparent] = navTransparency

  React.useEffect(() => {
    setNavTransparent(false)
  }, [])
  const [selectedCoin, setCoin] = useState(
    coins.find((x) => x.id === "BTC-USD")
  )
  const { title, description, buttons, bottomMargin } = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const mobile = useMediaQuery("(max-width:800px)")

  return (
    <Grid container className={description}>
      <Grid item xs={12}>
        <Typography variant="h5">The most popular cryptocurrencies</Typography>
      </Grid>
      <Grid item xs={12} className={buttons}>
        {mobile ? (
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {selectedCoin.name}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {coins.map((coin) => {
                return (
                  <MenuItem key={coin.id} onClick={handleClose}>
                    <Button
                      onClick={() => {
                        setCoin(coins.find((x) => x.id === coin.id))
                      }}
                    >
                      {coin.name}
                    </Button>
                  </MenuItem>
                )
              })}
            </Menu>
          </div>
        ) : (
          <ButtonGroup
            variant="text"
            color="secondary"
            aria-label="text primary button group"
          >
            {coins.map((coin) => {
              return (
                <Button
                  key={coin.id}
                  onClick={() => {
                    setCoin(coins.find((x) => x.id === coin.id))
                  }}
                >
                  {coin.name}
                </Button>
              )
            })}
            <Button>See All Crypto Guides</Button>
          </ButtonGroup>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" className={title}>
          What is {selectedCoin.name}?
        </Typography>
        <Typography variant="body1" className={bottomMargin}>
          {selectedCoin.description}
        </Typography>
        {/*       <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Learn more
          </Button>
        </Grid>*/}
      </Grid>

      <Grid container item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography variant="h5">{selectedCoin.name}'s Price</Typography>
        </Grid>
        <Grid item xs={12}>
          <LiveChart pair={selectedCoin.id} />
        </Grid>
      </Grid>
    </Grid>
  )
}
export default App

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer"])),
    },
  }
}
