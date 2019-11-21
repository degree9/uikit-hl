(ns uikit-hl.spinner
  (:require [hoplon.core :as h]))

(defmulti uk-spinner! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-spinner! elem key val))

(defmethod uk-spinner! ::default
  [elem kw v]
  (h/do! elem :uk-spinner (clj->js v)))

(h/defelem spinner [{:keys [spinner] :or {spinner {}} :as attr} kids]
  (h/div
    (dissoc attr :spinner)
    ::uk-spinner spinner
    kids))
