class ContributionsController < ApplicationController

    before_action :set_contribution, only: [:show, :update, :destroy]    

    def index
        contributions = Contribution.all
        render json: contributions.to_json(only: [:id, :text])
    end

    def show
        render json: @contribution.to_json(only: [:id, :text])
    end

    def create
        @contribution = Contribution.new(contribution_params)
    
        if @contribution.save
          render json: @contribution, status: :created, location: @contribution
        else
          render json: @contribution.errors, status: :unprocessable_entity
        end
    end

    def update
        @contribution.update(contribution_params)
        render json: @contribution      
    end

    def destroy
        @contribution.destroy
    end

    private

    def set_contribution
        @contribution = Contribution.find(params[:id])
    end

    def contribution_params
        params.require(:contribution).permit(:text, :author_id, :work_id)
    end 
    
end
