import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { ConcentratedLiquidityMarketMaker } from "../target/types/concentrated_liquidity_market_maker";

describe("concentrated_liquidity_market_maker", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.concentratedLiquidityMarketMaker as Program<ConcentratedLiquidityMarketMaker>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
