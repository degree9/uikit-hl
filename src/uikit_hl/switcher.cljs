(ns uikit-hl.switcher
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-switcher! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-switcher! elem key val))

(defn- format-switcher [switcher]
  (str "uk-switcher-" switcher))

(defmethod uk-switcher! ::default
  [elem kw v]
  (h/do! elem :class {(format-switcher (name kw)) v}))

(defmethod uk-switcher! ::switcher
  [elem _ v]
  (.switcher uk/uikit elem (clj->js v)))

(defmethod uk-switcher! ::item
  [elem _ v]
  (h/do! elem :uk-switcher-item v))

(h/defelem switcher [{:keys [switcher] :or {switcher {}} :as attr} kids]
  (h/ul
    (dissoc attr :switcher)
    ::switcher switcher
    kids))
