(ns uikit-hl.slider
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-slider! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-slider! elem key val))

(defn- format-slider [slider]
  (str "uk-slider-" slider))

(defmethod uk-slider! ::default
  [elem kw v]
  (h/do! elem :class {(format-slider (name kw)) v}))

(defmethod uk-slider! ::slider
  [elem _ v]
  (.slider uk/uikit elem (clj->js v)))

(defmethod uk-slider! ::item
  [elem kw v]
  (h/do! elem ::uk-slider-item v))

(defmethod uk-slider! ::parallax
  [elem kw v]
  (h/do! elem ::uk-slider-parallax v))

(h/defelem container [attr kids]
  (h/div attr ::container true kids))

(h/defelem items [attr kids]
  (h/ul attr ::items true kids))

(h/defelem nav [attr kids]
  (h/ul attr ::nav true kids))
