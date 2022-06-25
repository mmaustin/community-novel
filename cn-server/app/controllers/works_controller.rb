class WorksController < ApplicationController

    before_action :set_work, only: [:show, :update, :destroy]    

    def index
        works = Work.all
        render json: works.to_json(only: [:id, :title, :genre, :contribution_number, :author_id], :include => {:contributions => {only: [:id, :author_id]}})
    end

    def show
        render json: @work.to_json(only: [:id, :title, :genre, :contribution_number, :author_id], :include => {:contributions => {only: [:id, :author_id]}})
    end

    def create
        @work = Work.new(work_params)
    
        if @work.save
          render json: @work, status: :created, location: @work
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

    def set_work
        @work = Work.find(params[:id])
    end

    def work_params
        params.require(:work).permit(:title, :genre, :contribution_number, :author_id)
    end    

end
