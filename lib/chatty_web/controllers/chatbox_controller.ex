defmodule ChattyWeb.ChatBoxController do
  use ChattyWeb, :controller

  def index(conn, _params) do
    render conn, "chatbox.html"
  end
end
