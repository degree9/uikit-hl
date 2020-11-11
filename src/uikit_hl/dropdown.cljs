(ns uikit-hl.dropdown
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-dropdown! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key v]
  (uk-dropdown! elem key v))

(defn- format-dropdown [dropdown]
  (str "uk-dropdown-" dropdown))

(defmethod uk-dropdown! ::default
  [elem kw v]
  (h/do! elem :class {(format-dropdown (name kw)) v}))

(defmethod uk-dropdown! ::dropdown
  [elem _ v]
  (uk/dropdown elem v))

(h/defelem dropdown [{:keys [dropdown] :or {dropdown {}} :as attr} kids]
  (h/div
    (dissoc attr :dropdown)
    ::dropdown dropdown
    kids))
