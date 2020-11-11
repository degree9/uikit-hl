(ns uikit-hl.container
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-container! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-container! elem key val))

(defn- format-container [container]
  (str "uk-container-" container))

(defmethod uk-container! ::default
  [elem kw v]
  (h/do! elem :class {(format-container (name kw)) v}))

(defmethod uk-container! ::container
  [elem kw v]
  (h/do! elem :class {:uk-container v}))

(h/defelem container [{:keys [xsmall small large xlarge expand] :as attr} kids]
  (h/div
    (dissoc attr :small :large :expand)
    ::container true
    ::xsmall xsmall
    ::small  small
    ::large  large
    ::xlarge xlarge
    ::expand expand
    kids))
