import { TessaraContext } from '../../context/Context';
const {
  Connection,
  Keypair,
  Transaction,
  sendAndConfirmTransaction,
  SystemProgram,
  Token,
  TokenInstructions,
} = require('@solana/web3.js');
const { Wallet } = require('@project-serum/sol-wallet-adapter');
const { wallet, setWallet } = useContext(TessaraContext);


const rpcUrl = 'https://api.testnet.solana.com';
const mintAddress = 'YOUR_MINT_PUBLIC_KEY';
const imageUrl = 'https://example.com/your-image.jpg';

async function mintAndLockNFT(mint_name, mint_symbol, imageUrl) {
  try {
    const walletPublicKey = wallet.publicKey;
    // Create metadata
    const metadata = {
      name: mint_name,
      symbol: mint_name,
      uri: imageUrl,
    };

    const metadataAccount = await Token.createMetadataAccount(
      metadata,
      mintAddress,
      walletPublicKey,
      wallet,
      TokenInstructions.TOKEN_METADATA_PROGRAM_ID
    );


  } catch (error) {
    console.error(error);
  }
}

mintAndLockNFT();
