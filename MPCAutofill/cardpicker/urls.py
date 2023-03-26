from django.urls import path, re_path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("contributions", views.contributions, name="contributions"),
    path("new", views.new_cards, name="new"),
    path("legal", views.legal, name="legal"),
    re_path(r"^ajax/getnew/$", views.search_new_page, name="getnew"),
    path("guide", views.guide, name="guide"),
    path("ajax/status/", views.elasticsearch_status, name="status"),
    # region old API
    re_path(r"^ajax/search/$", views.search_individual, name="search"),
    re_path(r"^ajax/msearch/$", views.search_multiple, name="msearch"),
    re_path(r"^ajax/text/$", views.insert_text, name="insert_text"),
    re_path(r"^ajax/xml/$", views.insert_xml, name="xml"),
    re_path(r"^ajax/link/$", views.insert_link, name="insert_link"),
    path("review", views.review, name="review"),
    path("input_xml", views.input_xml, name="input_xml"),
    path("input_csv", views.input_csv, name="input_csv"),
    path("input_link", views.input_link, name="input_link"),
    # endregion
    # region new API
    # TODO: do these actually need to use `re_path`?
    path("editor", views.editor, name="editor"),
    re_path(r"^2/searchResults/$", views.api_function_1, name="api_function_1"),
    re_path(r"^2/cards/$", views.api_function_2, name="api_function_2"),
    re_path(r"^2/sources/$", views.api_function_3, name="api_function_3"),
    re_path(r"^2/DFCPairs/$", views.api_function_4, name="api_function_4"),
    re_path(r"^2/cardstocks/$", views.api_function_5, name="api_function_5"),
    re_path(r"^2/cardbacks/$", views.api_function_6, name="api_function_6"),
    re_path(r"^2/importSites/$", views.api_function_7, name="api_function_7"),
    re_path(r"^2/importSiteDecklist/$", views.api_function_8, name="api_function_8"),  # TODO: rename this
    re_path(r"^2/placeholderText/$", views.api_function_9, name="api_function_9"),
    re_path(r"^2/contributions/$", views.api_function_10, name="api_function_10"),
    # endregion
]
