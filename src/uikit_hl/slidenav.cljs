(ns uikit-hl.slidenav
  (:require [hoplon.core :as h]))

(defmulti uk-slidenav! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-slidenav! elem key val))

(defn- format-slidenav [slidenav]
  (str "uk-slidenav-" slidenav))

(defmethod uk-slidenav! ::default
  [elem kw v]
  (h/do! elem :class {(format-slidenav (name kw)) v}))

(defmethod h/do! ::next
  [elem _ v]
  (h/do! elem :uk-slidenav-next v))

(defmethod h/do! ::previous
  [elem _ v]
  (h/do! elem :uk-slidenav-previous v))

(h/defelem next [{:keys [large] :as attr} kids]
  (h/a
    (dissoc attr :large)
    ::next true
    ::large large
    kids))

(h/defelem previous [{:keys [large] :as attr} kids]
  (h/a
    (dissoc attr :large)
    ::previous true
    ::large large
    kids))

(h/defelem container [attr kids]
  (h/div attr ::container true kids))
