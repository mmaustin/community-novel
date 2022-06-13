class ContributionsController < ApplicationController

    before_action :set_contribution, only: [:show, :update, :destroy]    

    def index
        works = Work.all
        render json: works.to_json(only: [:id, :title, :genre, :contributions], :include => {:contributions => {only: [:id, :author_id]}})
    end

    def show
        render json: @work.to_json(only: [:id, :title, :genre, :contributions], :include => {:contributions => {only: [:id, :author_id]}})
    end

    def create
        @work = Work.new(work_params)
    
        if @work.save
          render json: @work, status: :created, location: @worker
        else
          render json: @work.errors, status: :unprocessable_entity
        end
    end

    def update
        @work.update(work_params)
        render json: @work       
    end

    def destroy
        @work.destroy
    end

    private

    def set_contribution
        @contribution = Contribution.find(params[:id])
    end

    def contribution_params
        params.require(:contribution).permit(:text, :author_id, :work_id)
    end 
    
end
