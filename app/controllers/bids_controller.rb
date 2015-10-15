class BidsController < ApplicationController

  def create
    Bid.create!(bid_params)
    @item=Item.find(params[:bid][:item_id])
    @bid=Bid.new(item: @item, amount: @item.next_bid_amount)
  end

  private
    # Only allow a trusted parameter "white list" through.
    def bid_params
      params.require(:bid).permit(:amount, :item_id)
    end
end
