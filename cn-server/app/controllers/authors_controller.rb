class AuthorsController < ApplicationController
    
    before_action :set_author, only: [:show, :update, :destroy]

    def index
        authors = Author.all
        render json: authors.to_json(only: [:id, :name, :statement], :include => [{:works => {only: [:id, :title, :genre, :contribution_number]}}, {:contributions => {only: [:text]}}])
    end

    def show
        render json: @author.to_json(only: [:id, :name, :statement], :include => [{:works => {only: [:id, :title, :genre, :contribution_number]}}, {:contributions => {only: [:text]}}])
    end

    def create
        @author = Author.new(author_params)
    
        if @author.save
          render json: @author, status: :created, location: @author
        else
          render json: @author.errors, status: :unprocessable_entity
        end
    end

    def update
        @author.update(author_params)
        render json: @author
    end

    def destroy
        @author.destroy
    end   

    private

    def set_author
        @author = Author.find(params[:id])
    end

    def author_params
        params.require(:author).permit(:name, :statement)
    end

end
