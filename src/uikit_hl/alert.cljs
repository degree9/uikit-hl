(ns uikit-hl.alert
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-alert! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-alert! elem key val))

(defn- format-alert [alert]
  (str "uk-alert-" alert))

(defmethod uk-alert! ::default
  [elem kw v]
  (h/do! elem :class {(format-alert (name kw)) v}))

(defmethod h/do! ::alert
  [elem _ v]
  (.alert uk/uikit elem (clj->js v)))

(h/defelem alert [{:keys [alert primary success warning danger] :or {alert {}} :as attr} kids]
  (h/div
    (dissoc attr :alert :primary :success :warning :danger)
    ::alert alert
    ::primary primary
    ::success success
    ::warning warning
    ::danger danger
    kids))
