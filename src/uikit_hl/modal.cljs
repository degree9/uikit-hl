(ns uikit-hl.modal
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]
            [uikit-hl.close :as close]))

(def modal! uk/modal)

(defn show! [modal]
  (.show modal))

(defn hide! [modal]
  (.hide modal))

(defmulti uk-modal! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-modal! elem key val))

(defn- format-modal [modal]
  (str "uk-modal-" modal))

(defmethod uk-modal! ::default
  [elem kw v]
  (h/do! elem :class {(format-modal (name kw)) v}))

(defmethod uk-modal! ::modal
  [elem _ v]
  (modal! elem (clj->js v)))

(h/defelem modal [{:keys [modal container full] :or {modal {}} :as attr} kids]
  (h/div
    (dissoc attr :container :full)
    ::modal modal
    ::container container
    ::full full
    kids))

(h/defelem dialog [attr kids]
  (h/div
    attr
    ::dialog true
    kids))

(h/defelem header [attr kids]
  (h/div
    attr
    ::header true
    kids))

(h/defelem body [attr kids]
  (h/div
    attr
    ::body true
    kids))

(h/defelem footer [attr kids]
  (h/div
    attr
    ::footer true
    kids))

(h/defelem title [attr kids]
  (h/h2
    attr
    ::title true
    kids))

(h/defelem close [{:keys [default outside full] :as attr} kids]
  (close/close
    (dissoc attr :default :outside :full)
    ::close-default default
    ::close-outside outside
    ::close-full full
    kids))
