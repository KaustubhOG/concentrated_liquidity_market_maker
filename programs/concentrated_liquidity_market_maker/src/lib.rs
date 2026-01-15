use anchor_lang::prelude::*;

declare_id!("A8ik9zk5rnhK9EDX75jbkMEqh4sTb7TkYcwVqUsHCcgR");

#[program]
pub mod concentrated_liquidity_market_maker {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
