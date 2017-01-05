class Api::NotebooksController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]
  before_action :require_owner, only: [:update, :destroy]

  def index
    if params[:user_id]
      @notebooks = Notebook.find_by_user_id(params[:user_id]).order('created_at DESC')
    else
      @notebooks = Notebook.all.includes(:user)
    end
  end

  def create
    @notebook = current_user.notebooks.new(notebook_params)

    if @notebook.save
      render :created
    else
      render json: { errors: @notebook.errors.full_messages }
    end
  end

  def update
    @notebook = Notebook.find(params[:id])

    return not_found if @notebook.nil?

    if @notebook.update(notebook_params)
      render :updated
    else
      render json: { errors: @notebook.errors.full_messages }
    end
  end

  def show
    @notebook = Notebook.find(params[:id])

    return not_found if @notebook.nil?

    render :show
  end

  def destroy
    @notebook = Notebook.find(params[:id])

    return not_found if @notebook.nil?

    if @notebook.destroy
      render :destroyed
    else
      render json: { errors: @notebook.errors.full_messages }
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:user_id, :title, :description)
  end

  def require_owner
    notebook_owned = current_user.notebooks.exists?(id: params[:id])

    forbidden unless notebook_owned
  end
end
