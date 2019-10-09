(ns uikit-hl.offcanvas
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-offcanvas! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-offcanvas! elem key val))

(defn- format-offcanvas [offcanvas]
  (str "uk-offcanvas-" offcanvas))

(defmethod uk-offcanvas! ::default
  [elem kw v]
  (elem :class {(format-offcanvas (name kw)) v}))

(defmethod uk-offcanvas! ::offcanvas
  [elem _ v]
  (.offcanvas uk/uikit elem (clj->js v)))

;;;;

(h/defelem content [attr kids]
  (h/div
    attr
    ::content true
    kids))

(h/defelem offcanvas [attr kids]
  (h/div
    attr
    ::offcanvas {}
    kids))

(h/defelem bar [attr kids]
  (h/div
    attr
    ::bar true
    kids))
