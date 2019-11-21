(ns uikit-hl.card
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-card! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-card! elem key val))

(defn- format-card [card]
  (str "uk-card-" card))

(defmethod uk-card! ::default
  [elem kw v]
  (h/do! elem :class {(format-card (name kw)) v}))

(defmethod uk-card! ::card
  [elem kw v]
  (h/do! elem :class {:uk-card v}))

(h/defelem card [{:keys [default primary secondary hover small large] :as attr} kids]
  (h/div
    (dissoc attr :default :primary :secondary :hover :small :large)
    ::card true
    ::default default
    ::primary primary
    ::secondary secondary
    ::hover hover
    ::small small
    ::large large
    kids))

(h/defelem header [attr kids]
  (h/div attr ::header true kids))

(h/defelem title [attr kids]
  (h/h3 attr ::title true kids))

(h/defelem body [attr kids]
  (h/div attr ::body true kids))

(h/defelem footer [attr kids]
  (h/div attr ::footer true kids))

(h/defelem badge [attr kids]
  (h/div attr ::badge true kids))

(h/defelem media-top [attr kids]
  (h/div attr ::media-top true kids))

(h/defelem media-bottom [attr kids]
  (h/div attr ::media-bottom true kids))

(h/defelem media-left [attr kids]
  (h/div attr ::media-left true kids))

(h/defelem media-right [attr kids]
  (h/div attr ::media-right true kids))
